import {
  Borrow as BorrowEvent,
  Deposition as DepositionEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Repay as RepayEvent,
  Withdrawal as WithdrawalEvent
} from "../generated/AurumV2core/AurumV2core"
import {
  Borrow,
  Deposition,
  OwnershipTransferred,
  Repay,
  Withdrawal
} from "../generated/schema"

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId
  entity.amount = event.params.amount
  entity.duration = event.params.duration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposition(event: DepositionEvent): void {
  let entity = new Deposition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depoId = event.params.depoId
  entity.lender = event.params.lender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRepay(event: RepayEvent): void {
  let entity = new Repay(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.borrower = event.params.borrower
  entity.loanId = event.params.loanId
  entity.amount = event.params.amount
  entity.interest = event.params.interest

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawal(event: WithdrawalEvent): void {
  let entity = new Withdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depoId = event.params.depoId
  entity.lender = event.params.lender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
