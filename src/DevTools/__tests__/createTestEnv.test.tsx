import { createTestEnv_artwork } from "__generated__/createTestEnv_artwork.graphql"
import { createTestEnvCreditCardMutation } from "__generated__/createTestEnvCreditCardMutation.graphql"
import { createTestEnvOrderMutation } from "__generated__/createTestEnvOrderMutation.graphql"
import { createTestEnvQueryRawResponse } from "__generated__/createTestEnvQuery.graphql"
import { createTestEnv } from "DevTools/createTestEnv"
import { expectOne, RootTestPage } from "DevTools/RootTestPage"
import React from "react"
import {
  commitMutation,
  createFragmentContainer,
  graphql,
  RelayProp,
} from "react-relay"

jest.unmock("react-relay")

const orderMutation =
  // TODO: Inputs to the mutation might have changed case of the keys!
  graphql`
    mutation createTestEnvOrderMutation(
      $input: CommerceCreateOrderWithArtworkInput!
    ) {
      commerceCreateOrderWithArtwork(input: $input) {
        orderOrError {
          ... on CommerceOrderWithMutationSuccess {
            order {
              internalID
            }
          }
          ... on CommerceOrderWithMutationFailure {
            error {
              type
            }
          }
        }
      }
    }
  `

const orderSuccess = {
  commerceCreateOrderWithArtwork: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationSuccess",
      order: {
        __typename: "CommerceBuyOrder",
        internalID: "order-id",
      },
    },
  },
}

const orderFailure = {
  commerceCreateOrderWithArtwork: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "order-error",
      },
    },
  },
}

const creditCardMutation =
  // TODO: Inputs to the mutation might have changed case of the keys!
  graphql`
    mutation createTestEnvCreditCardMutation($input: CreditCardInput!) {
      createCreditCard: createCreditCard(input: $input) {
        creditCardOrError {
          ... on CreditCardMutationSuccess {
            creditCard {
              brand
            }
          }
          ... on CreditCardMutationFailure {
            mutationError {
              type
            }
          }
        }
      }
    }
  `

const creditCardSuccess = {
  createCreditCard: {
    creditCardOrError: {
      __typename: "CreditCardMutationSuccess",
      creditCard: {
        brand: "mastercard! visa!",
      },
    },
  },
}

const creditCardFailure = {
  createCreditCard: {
    creditCardOrError: {
      __typename: "CreditCardMutationFailure",
      mutationError: {
        type: "card-error",
      },
    },
  },
}

const onCompleted = jest.fn()
const onError = jest.fn()

const Component = createFragmentContainer(
  ({
    relay,
    artwork,
  }: {
    relay: RelayProp
    artwork: createTestEnv_artwork
  }) => (
    <div>
      <h1>This is the main heading</h1>
      <p>
        The artwork is {artwork.title} by {artwork.artist.name}
      </p>
      <button
        onClick={() =>
          commitMutation<createTestEnvOrderMutation>(relay.environment, {
            onCompleted,
            onError,
            variables: { input: { artworkId: "artwork-id" } },
            // tslint:disable-next-line:relay-operation-generics
            mutation: orderMutation,
          })
        }
      >
        create the order
      </button>

      <button
        onClick={() =>
          commitMutation<createTestEnvCreditCardMutation>(relay.environment, {
            onCompleted,
            onError,
            variables: { input: { token: "card-token", oneTimeUse: true } },
            // tslint:disable-next-line:relay-operation-generics
            mutation: creditCardMutation,
          })
        }
      >
        create the credit card
      </button>
    </div>
  ),
  {
    artwork: graphql`
      fragment createTestEnv_artwork on Artwork {
        title
        artist {
          name
        }
      }
    `,
  }
)

describe("test envs", () => {
  beforeEach(() => {
    onCompleted.mockReset()
    onError.mockReset()
  })
  const { buildPage, mutations } = createTestEnv({
    Component,
    TestPage: class MyTestPage extends RootTestPage {
      get heading() {
        return expectOne(this.find("h1"))
      }
      get orderSubmitButton() {
        return expectOne(
          this.find("button").filterWhere(button =>
            button.text().includes("create the order")
          )
        )
      }
      get creditCardSubmitButton() {
        return expectOne(
          this.find("button").filterWhere(button =>
            button.text().includes("create the credit card")
          )
        )
      }
    },
    defaultData: {
      artwork: {
        title: "Test Artwork",
        artist: { name: "David Sheldrick" },
      },
    } as createTestEnvQueryRawResponse,
    defaultMutationResults: {
      ...orderSuccess,
      ...creditCardSuccess,
    },
    query: graphql`
      query createTestEnvQuery @raw_response_type {
        artwork(id: "unused") {
          ...createTestEnv_artwork
        }
      }
    `,
  })

  it("lets you make a page", async () => {
    const page = await buildPage()

    expect(page.heading.text()).toMatchInlineSnapshot(
      `"This is the main heading"`
    )
    expect(page.find("p").text()).toMatchInlineSnapshot(
      `"The artwork is Test Artwork by David Sheldrick"`
    )
    expect(page.orderSubmitButton).toBeTruthy()
    expect(page.creditCardSubmitButton).toBeTruthy()
  })

  it("lets you override the default data", async () => {
    const page = await buildPage({
      mockData: {
        artwork: {
          title: "New Artwork",
          artist: {
            name: "Daisy O'Doherty",
          },
        },
      },
    })
    expect(page.find("p").text()).toMatchInlineSnapshot(
      `"The artwork is New Artwork by Daisy O'Doherty"`
    )
  })

  it("lets you commit mutations", async () => {
    const page = await buildPage()
    page.creditCardSubmitButton.simulate("click")
    await page.update()
    expect(mutations.resolvers.createCreditCard).toHaveBeenCalled()
    expect(mutations.lastFetchVariables).toMatchObject({
      input: {
        oneTimeUse: true,
        token: "card-token",
      },
    })
    expect(onCompleted).toHaveBeenCalledTimes(1)
    expect(
      onCompleted.mock.calls[0][0].createCreditCard.creditCardOrError.creditCard
    ).toMatchObject(
      creditCardSuccess.createCreditCard.creditCardOrError.creditCard
    )
  })

  it("lets you change the mutations results at any time", async () => {
    const page = await buildPage()
    page.creditCardSubmitButton.simulate("click")
    await page.update()
    expect(onCompleted).toHaveBeenCalledTimes(1)
    expect(onError).toHaveBeenCalledTimes(0)
    expect(
      onCompleted.mock.calls[0][0].createCreditCard.creditCardOrError.creditCard
    ).toMatchObject(
      creditCardSuccess.createCreditCard.creditCardOrError.creditCard
    )

    mutations.useResultsOnce(creditCardFailure)

    page.creditCardSubmitButton.simulate("click")
    await page.update()
    expect(onCompleted).toHaveBeenCalledTimes(2)
    expect(onError).toHaveBeenCalledTimes(0)
    expect(
      onCompleted.mock.calls[1][0].createCreditCard.creditCardOrError
        .mutationError
    ).toMatchObject(
      creditCardFailure.createCreditCard.creditCardOrError.mutationError
    )
  })

  it("lets you simulate a network error", async () => {
    const page = await buildPage()
    mutations.mockNetworkFailureOnce()

    page.creditCardSubmitButton.simulate("click")
    await page.update()
    expect(onCompleted).not.toHaveBeenCalled()
    expect(onError).toHaveBeenCalledTimes(1)
  })

  it("lets you do more than one mutation type", async () => {
    const page = await buildPage()

    page.orderSubmitButton.simulate("click")
    page.creditCardSubmitButton.simulate("click")

    await page.update()

    expect(onCompleted).toHaveBeenCalledTimes(2)
    expect(
      onCompleted.mock.calls[0][0].commerceCreateOrderWithArtwork.orderOrError
    ).toMatchObject({ order: {} })
    expect(
      onCompleted.mock.calls[1][0].createCreditCard.creditCardOrError
    ).toMatchObject({ creditCard: {} })

    onCompleted.mockReset()

    mutations.useResultsOnce({
      ...creditCardFailure,
      ...orderFailure,
    })

    page.orderSubmitButton.simulate("click")
    page.creditCardSubmitButton.simulate("click")

    await page.update()
    expect(
      onCompleted.mock.calls[0][0].commerceCreateOrderWithArtwork.orderOrError
    ).toMatchObject({ error: {} })
    expect(
      onCompleted.mock.calls[1][0].createCreditCard.creditCardOrError
    ).toMatchObject({ mutationError: {} })
  })

  it("resets the mutation mocks after every test", () => {
    expect(mutations.resolvers.createCreditCard).not.toHaveBeenCalled()
    expect(
      mutations.resolvers.commerceCreateOrderWithArtwork
    ).not.toHaveBeenCalled()
  })

  it("lets you inspect mutation variables", async () => {
    const page = await buildPage()

    page.orderSubmitButton.simulate("click")

    expect(mutations.lastFetchVariables).toMatchObject({
      input: {
        artworkId: "artwork-id",
      },
    })

    await page.update()

    page.creditCardSubmitButton.simulate("click")

    expect(mutations.lastFetchVariables).toMatchObject({
      input: {
        oneTimeUse: true,
        token: "card-token",
      },
    })
  })

  it("doesn't matter if you call mutations.useResultsOnce before or after buildPage", async () => {
    mutations.useResultsOnce(orderFailure)
    const page = await buildPage()
    page.orderSubmitButton.simulate("click")
    await page.update()
    expect(
      onCompleted.mock.calls[0][0].commerceCreateOrderWithArtwork.orderOrError
    ).toMatchObject({ error: {} })
  })

  it("stacks .useResultsOnce calls", async () => {
    mutations.useResultsOnce(orderFailure)
    mutations.useResultsOnce(orderFailure)
    const page = await buildPage()
    page.orderSubmitButton.simulate("click")
    await page.update()
    expect(
      onCompleted.mock.calls[0][0].commerceCreateOrderWithArtwork.orderOrError
    ).toMatchObject({ error: {} })
    page.orderSubmitButton.simulate("click")
    await page.update()
    expect(
      onCompleted.mock.calls[1][0].commerceCreateOrderWithArtwork.orderOrError
    ).toMatchObject({ error: {} })
    page.orderSubmitButton.simulate("click")
    await page.update()
    expect(
      mutations.resolvers.commerceCreateOrderWithArtwork
    ).toHaveBeenCalledTimes(3)
    expect(onCompleted).toHaveBeenCalledTimes(3)
    expect(
      onCompleted.mock.calls[2][0].commerceCreateOrderWithArtwork.orderOrError
    ).toMatchObject({ order: {} })
  })
})
