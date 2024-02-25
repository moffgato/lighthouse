use crate::types::DataValue;
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;

#[derive(BorshDeserialize, BorshSerialize, Debug, Clone)]
pub enum WriteType {
    AccountBalance,

    // Account Data Offset, Data Length, Validation
    AccountData(u16, Option<u16>),
    AccountInfo,
    DataValue(DataValue),
    Program,
}

impl WriteType {
    pub fn size(&self, account_info: Option<&AccountInfo<'_>>) -> Option<usize> {
        match self {
            WriteType::AccountBalance => Some(8),
            WriteType::AccountData(account_offset, data_length) => {
                if let Some(data_length) = data_length {
                    Some(*data_length as usize)
                } else {
                    match account_info {
                        Some(account_info) => Some(
                            account_info
                                .data_len()
                                .checked_sub(*account_offset as usize)?,
                        ),
                        None => None,
                    }
                }
            }
            WriteType::AccountInfo => Some(8),
            WriteType::DataValue(memory_value) => match memory_value {
                DataValue::Bool(_) | DataValue::U8(_) | DataValue::I8(_) => Some(1),
                DataValue::U16(_) | DataValue::I16(_) => Some(2),
                DataValue::U32(_) | DataValue::I32(_) => Some(4),
                DataValue::U64(_) | DataValue::I64(_) => Some(8),
                DataValue::U128(_) | DataValue::I128(_) => Some(16),
                DataValue::Bytes(bytes) => Some(bytes.len()),
                DataValue::Pubkey(_) => Some(32),
            },
            WriteType::Program => Some(64),
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize, Debug, Clone)]
pub enum WriteTypeParameter {
    // Memory offset, write type
    WriteU8(u8, WriteType),
    WriteU16(u16, WriteType),
    WriteU32(u32, WriteType),
}