//! This code was AUTOGENERATED using the kinobi library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun kinobi to update it.
//!
//! [https://github.com/metaplex-foundation/kinobi]
//!

use crate::generated::types::LogLevel;
use crate::generated::types::MerkleTreeAssertion;
use borsh::BorshDeserialize;
use borsh::BorshSerialize;

/// Accounts.
pub struct AssertMerkleTreeAccount {
    /// Target merkle tree account to be asserted
    pub target_merkle_tree: solana_program::pubkey::Pubkey,
    /// The current root of the merkle tree
    pub root: solana_program::pubkey::Pubkey,
    /// SPL account compression program
    pub spl_account_compression: solana_program::pubkey::Pubkey,
}

impl AssertMerkleTreeAccount {
    pub fn instruction(
        &self,
        args: AssertMerkleTreeAccountInstructionArgs,
    ) -> solana_program::instruction::Instruction {
        self.instruction_with_remaining_accounts(args, &[])
    }
    #[allow(clippy::vec_init_then_push)]
    pub fn instruction_with_remaining_accounts(
        &self,
        args: AssertMerkleTreeAccountInstructionArgs,
        remaining_accounts: &[solana_program::instruction::AccountMeta],
    ) -> solana_program::instruction::Instruction {
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.target_merkle_tree,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.root, false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.spl_account_compression,
            false,
        ));
        accounts.extend_from_slice(remaining_accounts);
        let mut data = AssertMerkleTreeAccountInstructionData::new()
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
struct AssertMerkleTreeAccountInstructionData {
    discriminator: u8,
}

impl AssertMerkleTreeAccountInstructionData {
    fn new() -> Self {
        Self { discriminator: 15 }
    }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct AssertMerkleTreeAccountInstructionArgs {
    pub log_level: LogLevel,
    pub assertion: MerkleTreeAssertion,
}

/// Instruction builder for `AssertMerkleTreeAccount`.
///
/// ### Accounts:
///
///   0. `[]` target_merkle_tree
///   1. `[]` root
///   2. `[]` spl_account_compression
#[derive(Default)]
pub struct AssertMerkleTreeAccountBuilder {
    target_merkle_tree: Option<solana_program::pubkey::Pubkey>,
    root: Option<solana_program::pubkey::Pubkey>,
    spl_account_compression: Option<solana_program::pubkey::Pubkey>,
    log_level: Option<LogLevel>,
    assertion: Option<MerkleTreeAssertion>,
    __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl AssertMerkleTreeAccountBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    /// Target merkle tree account to be asserted
    #[inline(always)]
    pub fn target_merkle_tree(
        &mut self,
        target_merkle_tree: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.target_merkle_tree = Some(target_merkle_tree);
        self
    }
    /// The current root of the merkle tree
    #[inline(always)]
    pub fn root(&mut self, root: solana_program::pubkey::Pubkey) -> &mut Self {
        self.root = Some(root);
        self
    }
    /// SPL account compression program
    #[inline(always)]
    pub fn spl_account_compression(
        &mut self,
        spl_account_compression: solana_program::pubkey::Pubkey,
    ) -> &mut Self {
        self.spl_account_compression = Some(spl_account_compression);
        self
    }
    /// `[optional argument, defaults to 'LogLevel::Silent']`
    #[inline(always)]
    pub fn log_level(&mut self, log_level: LogLevel) -> &mut Self {
        self.log_level = Some(log_level);
        self
    }
    #[inline(always)]
    pub fn assertion(&mut self, assertion: MerkleTreeAssertion) -> &mut Self {
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
        let accounts = AssertMerkleTreeAccount {
            target_merkle_tree: self
                .target_merkle_tree
                .expect("target_merkle_tree is not set"),
            root: self.root.expect("root is not set"),
            spl_account_compression: self
                .spl_account_compression
                .expect("spl_account_compression is not set"),
        };
        let args = AssertMerkleTreeAccountInstructionArgs {
            log_level: self.log_level.clone().unwrap_or(LogLevel::Silent),
            assertion: self.assertion.clone().expect("assertion is not set"),
        };

        accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
    }
}

/// `assert_merkle_tree_account` CPI accounts.
pub struct AssertMerkleTreeAccountCpiAccounts<'a, 'b> {
    /// Target merkle tree account to be asserted
    pub target_merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    /// The current root of the merkle tree
    pub root: &'b solana_program::account_info::AccountInfo<'a>,
    /// SPL account compression program
    pub spl_account_compression: &'b solana_program::account_info::AccountInfo<'a>,
}

/// `assert_merkle_tree_account` CPI instruction.
pub struct AssertMerkleTreeAccountCpi<'a, 'b> {
    /// The program to invoke.
    pub __program: &'b solana_program::account_info::AccountInfo<'a>,
    /// Target merkle tree account to be asserted
    pub target_merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    /// The current root of the merkle tree
    pub root: &'b solana_program::account_info::AccountInfo<'a>,
    /// SPL account compression program
    pub spl_account_compression: &'b solana_program::account_info::AccountInfo<'a>,
    /// The arguments for the instruction.
    pub __args: AssertMerkleTreeAccountInstructionArgs,
}

impl<'a, 'b> AssertMerkleTreeAccountCpi<'a, 'b> {
    pub fn new(
        program: &'b solana_program::account_info::AccountInfo<'a>,
        accounts: AssertMerkleTreeAccountCpiAccounts<'a, 'b>,
        args: AssertMerkleTreeAccountInstructionArgs,
    ) -> Self {
        Self {
            __program: program,
            target_merkle_tree: accounts.target_merkle_tree,
            root: accounts.root,
            spl_account_compression: accounts.spl_account_compression,
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
        let mut accounts = Vec::with_capacity(3 + remaining_accounts.len());
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.target_merkle_tree.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.root.key,
            false,
        ));
        accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.spl_account_compression.key,
            false,
        ));
        remaining_accounts.iter().for_each(|remaining_account| {
            accounts.push(solana_program::instruction::AccountMeta {
                pubkey: *remaining_account.0.key,
                is_signer: remaining_account.1,
                is_writable: remaining_account.2,
            })
        });
        let mut data = AssertMerkleTreeAccountInstructionData::new()
            .try_to_vec()
            .unwrap();
        let mut args = self.__args.try_to_vec().unwrap();
        data.append(&mut args);

        let instruction = solana_program::instruction::Instruction {
            program_id: crate::LIGHTHOUSE_ID,
            accounts,
            data,
        };
        let mut account_infos = Vec::with_capacity(3 + 1 + remaining_accounts.len());
        account_infos.push(self.__program.clone());
        account_infos.push(self.target_merkle_tree.clone());
        account_infos.push(self.root.clone());
        account_infos.push(self.spl_account_compression.clone());
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

/// Instruction builder for `AssertMerkleTreeAccount` via CPI.
///
/// ### Accounts:
///
///   0. `[]` target_merkle_tree
///   1. `[]` root
///   2. `[]` spl_account_compression
pub struct AssertMerkleTreeAccountCpiBuilder<'a, 'b> {
    instruction: Box<AssertMerkleTreeAccountCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> AssertMerkleTreeAccountCpiBuilder<'a, 'b> {
    pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
        let instruction = Box::new(AssertMerkleTreeAccountCpiBuilderInstruction {
            __program: program,
            target_merkle_tree: None,
            root: None,
            spl_account_compression: None,
            log_level: None,
            assertion: None,
            __remaining_accounts: Vec::new(),
        });
        Self { instruction }
    }
    /// Target merkle tree account to be asserted
    #[inline(always)]
    pub fn target_merkle_tree(
        &mut self,
        target_merkle_tree: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.target_merkle_tree = Some(target_merkle_tree);
        self
    }
    /// The current root of the merkle tree
    #[inline(always)]
    pub fn root(&mut self, root: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
        self.instruction.root = Some(root);
        self
    }
    /// SPL account compression program
    #[inline(always)]
    pub fn spl_account_compression(
        &mut self,
        spl_account_compression: &'b solana_program::account_info::AccountInfo<'a>,
    ) -> &mut Self {
        self.instruction.spl_account_compression = Some(spl_account_compression);
        self
    }
    /// `[optional argument, defaults to 'LogLevel::Silent']`
    #[inline(always)]
    pub fn log_level(&mut self, log_level: LogLevel) -> &mut Self {
        self.instruction.log_level = Some(log_level);
        self
    }
    #[inline(always)]
    pub fn assertion(&mut self, assertion: MerkleTreeAssertion) -> &mut Self {
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
        let args = AssertMerkleTreeAccountInstructionArgs {
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
        let instruction = AssertMerkleTreeAccountCpi {
            __program: self.instruction.__program,

            target_merkle_tree: self
                .instruction
                .target_merkle_tree
                .expect("target_merkle_tree is not set"),

            root: self.instruction.root.expect("root is not set"),

            spl_account_compression: self
                .instruction
                .spl_account_compression
                .expect("spl_account_compression is not set"),
            __args: args,
        };
        instruction.invoke_signed_with_remaining_accounts(
            signers_seeds,
            &self.instruction.__remaining_accounts,
        )
    }
}

struct AssertMerkleTreeAccountCpiBuilderInstruction<'a, 'b> {
    __program: &'b solana_program::account_info::AccountInfo<'a>,
    target_merkle_tree: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    root: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    spl_account_compression: Option<&'b solana_program::account_info::AccountInfo<'a>>,
    log_level: Option<LogLevel>,
    assertion: Option<MerkleTreeAssertion>,
    /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
    __remaining_accounts: Vec<(
        &'b solana_program::account_info::AccountInfo<'a>,
        bool,
        bool,
    )>,
}
