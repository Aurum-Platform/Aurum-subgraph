import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Borrow,
  Deposition,
  OwnershipTransferred,
  Repay,
  Withdrawal
} from "../generated/AurumV2core/AurumV2core"

export function createBorrowEvent(
  borrower: Address,
  loanId: BigInt,
  amount: BigInt,
  duration: BigInt
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return borrowEvent
}

export function createDepositionEvent(
  depoId: BigInt,
  lender: Address,
  amount: BigInt
): Deposition {
  let depositionEvent = changetype<Deposition>(newMockEvent())

  depositionEvent.parameters = new Array()

  depositionEvent.parameters.push(
    new ethereum.EventParam("depoId", ethereum.Value.fromUnsignedBigInt(depoId))
  )
  depositionEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  depositionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositionEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRepayEvent(
  borrower: Address,
  loanId: BigInt,
  amount: BigInt,
  interest: BigInt
): Repay {
  let repayEvent = changetype<Repay>(newMockEvent())

  repayEvent.parameters = new Array()

  repayEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("loanId", ethereum.Value.fromUnsignedBigInt(loanId))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  repayEvent.parameters.push(
    new ethereum.EventParam(
      "interest",
      ethereum.Value.fromUnsignedBigInt(interest)
    )
  )

  return repayEvent
}

export function createWithdrawalEvent(
  depoId: BigInt,
  lender: Address,
  amount: BigInt
): Withdrawal {
  let withdrawalEvent = changetype<Withdrawal>(newMockEvent())

  withdrawalEvent.parameters = new Array()

  withdrawalEvent.parameters.push(
    new ethereum.EventParam("depoId", ethereum.Value.fromUnsignedBigInt(depoId))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("lender", ethereum.Value.fromAddress(lender))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawalEvent
}
