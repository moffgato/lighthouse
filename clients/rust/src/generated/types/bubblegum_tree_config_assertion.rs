//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::EquatableOperator;
use crate::generated::types::IntegerOperator;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub enum BubblegumTreeConfigAssertion {
    TreeCreator {
        #[cfg_attr(
            feature = "serde",
            serde(with = "serde_with::As::<serde_with::DisplayFromStr>")
        )]
        value: Pubkey,
        operator: EquatableOperator,
    },
    TreeDelegate {
        #[cfg_attr(
            feature = "serde",
            serde(with = "serde_with::As::<serde_with::DisplayFromStr>")
        )]
        value: Pubkey,
        operator: EquatableOperator,
    },
    TotalMintCapacity {
        value: u64,
        operator: IntegerOperator,
    },
    NumMinted {
        value: u64,
        operator: IntegerOperator,
    },
    IsPublic {
        value: bool,
        operator: EquatableOperator,
    },
    IsDecompressible {
        value: u8,
        operator: EquatableOperator,
    },
}