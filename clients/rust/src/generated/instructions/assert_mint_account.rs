//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::LogLevel;
use crate::generated::types::MintAccountAssertion;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct AssertMintAccount {
    /// Target account to be asserted
    pub target_account: solana_program::pubkey::Pubkey,
}

impl AssertMintAccount {
    pub fn instruction(
        &self,
        args: AssertMintAccountInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: AssertMintAccountInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(1 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.target_account,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = AssertMintAccountInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = args.try_to_vec().unwrap();
        data.append(&mut args);

        solana_program::instruction::Instruction {
            program_id: crate::LIGHTHOUSE_ID,
            accounts,
            data,
        }
    }
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct AssertMintAccountInstructionData {
    discriminator: u8,
}

impl AssertMintAccountInstructionData {
    pub fn new() -> Self {
        Self { discriminator: 6 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct AssertMintAccountInstructionArgs {
    pub log_level: LogLevel,
    pub assertion: MintAccountAssertion,
}

/// Instruction builder for `AssertMintAccount`.
///
/// ### Accounts:
///
///   0. `[]` target_account
#[derive(Clone, Debug, Default)]
pub struct AssertMintAccountBuilder {
    target_account: Option<solana_program::pubkey::Pubkey>,
    log_level: Option<LogLevel>,
    assertion: Option<MintAccountAssertion>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl AssertMintAccountBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Target account to be asserted
    #[inline(always)]
    pub fn target_account(&mut self, target_account: solana_program::pubkey::Pubkey) -> &mut Self {
        self.target_account = Some(target_account);
        self
    }
    /// `[optional argument, defaults to 'LogLevel::Silent']`
    #[inline(always)]
    pub fn log_level(&mut self, log_level: LogLevel) -> &mut Self {
        self.log_level = Some(log_level);
        self
    }
    #[inline(always)]
    pub fn assertion(&mut self, assertion: MintAccountAssertion) -> &mut Self {
        self.assertion = Some(assertion);
        self
    }
    /// Add an aditional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: solana_program::instruction::AccountMeta,
    ) -> &mut Self {
        self.__remaining_accounts.push(account);
        self
    }
    /// Add additional accounts to the instruction.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[solana_program::instruction::AccountMeta],
    ) -> &mut Self {
        self.__remaining_accounts.extend_from_slice(accounts);
        self
    }
    #[allow(clippy::clone_on_copy)]
    pub fn instruction(&self) -> solana_program::instruction::Instruction {
        let accounts = AssertMintAccount {
            target_account: self.target_account.expect("target_account is not set"),
        };
        let args = AssertMintAccountInstructionArgs {
            log_level: self.log_level.clone().unwrap_or(LogLevel::Silent),
            assertion: self.assertion.clone().expect("assertion is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `assert_mint_account` CPI accounts.
pub struct AssertMintAccountCpiAccounts<'a, 'b> {
    /// Target account to be asserted
    pub target_account: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `assert_mint_account` CPI instruction.
pub struct AssertMintAccountCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Target account to be asserted
    pub target_account: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: AssertMintAccountInstructionArgs,
}

impl<'a, 'b> AssertMintAccountCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: AssertMintAccountCpiAccounts<'a, 'b>,
        args: AssertMintAccountInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            target_account: accounts.target_account,
            __args: args,
        }
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], &[])
    }
    #[inline(always)]
    pub fn invoke_with_remaining_accounts(
        &self,
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
    }
    #[inline(always)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed_with_remaining_accounts(
        &self,
        signers_seeds: &[&[&[u8]]],
        remaining_accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> solana_program::entrypoint::ProgramResult {
        let mut accounts = Vec::with_capacity(1 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.target_account.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = AssertMintAccountInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::LIGHTHOUSE_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(1 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.target_account.clone());
        remaining_accounts
            .iter()
            .for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

        if signers_seeds.is_empty() {
            solana_program::program::invoke(&instruction, &account_infos)
        } else {
            solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
        }
    }
}

/// Instruction builder for `AssertMintAccount` via CPI.
///
/// ### Accounts:
///
///   0. `[]` target_account
#[derive(Clone, Debug)]
pub struct AssertMintAccountCpiBuilder<'a, 'b> {
    instruction: Box<AssertMintAccountCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> AssertMintAccountCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(AssertMintAccountCpiBuilderInstruction {
            __program: program,
            target_account: None,
            log_level: None,
            assertion: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Target account to be asserted
    #[inline(always)]
    pub fn target_account(
        &mut self,
        target_account: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.target_account = Some(target_account);
        self
    }
    /// `[optional argument, defaults to 'LogLevel::Silent']`
    #[inline(always)]
    pub fn log_level(&mut self, log_level: LogLevel) -> &mut Self {
        self.instruction.log_level = Some(log_level);
        self
    }
    #[inline(always)]
    pub fn assertion(&mut self, assertion: MintAccountAssertion) -> &mut Self {
        self.instruction.assertion = Some(assertion);
        self
    }
    /// Add an additional account to the instruction.
    #[inline(always)]
    pub fn add_remaining_account(
        &mut self,
        account: &'b solana_program::account_info::AccountInfo<'a>,
        is_writable: bool,
        is_signer: bool,
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .push((account, is_writable, is_signer));
        self
    }
    /// Add additional accounts to the instruction.
    ///
    /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
    /// and a `bool` indicating whether the account is a signer or not.
    #[inline(always)]
    pub fn add_remaining_accounts(
        &mut self,
        accounts: &[(
            &'b solana_program::account_info::AccountInfo<'a>,
            bool,
            bool,
        )],
    ) -> &mut Self {
        self.instruction
            .__remaining_accounts
            .extend_from_slice(accounts);
        self
    }
    #[inline(always)]
    pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
        self.invoke_signed(&[])
    }
    #[allow(clippy::clone_on_copy)]
    #[allow(clippy::vec_init_then_push)]
    pub fn invoke_signed(
        &self,
        signers_seeds: &[&[&[u8]]],
    ) -> solana_program::entrypoint::ProgramResult {
        let args = AssertMintAccountInstructionArgs {
            log_level: self
                .instruction
                .log_level
                .clone()
                .unwrap_or(LogLevel::Silent),
            assertion: self
                .instruction
                .assertion
                .clone()
                .expect("assertion is not set"),
        };
        let instruction = AssertMintAccountCpi {
            __program: self.instruction.__program,

            target_account: self
                .instruction
                .target_account
                .expect("target_account is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

#[derive(Clone, Debug)]
struct AssertMintAccountCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    target_account: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    log_level: Option<LogLevel>,
    assertion: Option<MintAccountAssertion>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
