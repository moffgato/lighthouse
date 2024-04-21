/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Option, OptionOrNullable, PublicKey } from '@metaplex-foundation/umi';
import { GetDataEnumKind, GetDataEnumKindContent, Serializer } from '@metaplex-foundation/umi/serializers';
import { EquatableOperator, EquatableOperatorArgs, IntegerOperator, IntegerOperatorArgs, KnownProgram, KnownProgramArgs } from '.';
export type AccountInfoAssertion = {
    __kind: 'Lamports';
    value: bigint;
    operator: IntegerOperator;
} | {
    __kind: 'DataLength';
    value: bigint;
    operator: IntegerOperator;
} | {
    __kind: 'Owner';
    value: PublicKey;
    operator: EquatableOperator;
} | {
    __kind: 'KnownOwner';
    value: KnownProgram;
    operator: EquatableOperator;
} | {
    __kind: 'RentEpoch';
    value: bigint;
    operator: IntegerOperator;
} | {
    __kind: 'IsSigner';
    value: boolean;
    operator: EquatableOperator;
} | {
    __kind: 'IsWritable';
    value: boolean;
    operator: EquatableOperator;
} | {
    __kind: 'Executable';
    value: boolean;
    operator: EquatableOperator;
} | {
    __kind: 'VerifyDatahash';
    expectedHash: Uint8Array;
    start: Option<number>;
    length: Option<number>;
};
export type AccountInfoAssertionArgs = {
    __kind: 'Lamports';
    value: number | bigint;
    operator: IntegerOperatorArgs;
} | {
    __kind: 'DataLength';
    value: number | bigint;
    operator: IntegerOperatorArgs;
} | {
    __kind: 'Owner';
    value: PublicKey;
    operator: EquatableOperatorArgs;
} | {
    __kind: 'KnownOwner';
    value: KnownProgramArgs;
    operator: EquatableOperatorArgs;
} | {
    __kind: 'RentEpoch';
    value: number | bigint;
    operator: IntegerOperatorArgs;
} | {
    __kind: 'IsSigner';
    value: boolean;
    operator: EquatableOperatorArgs;
} | {
    __kind: 'IsWritable';
    value: boolean;
    operator: EquatableOperatorArgs;
} | {
    __kind: 'Executable';
    value: boolean;
    operator: EquatableOperatorArgs;
} | {
    __kind: 'VerifyDatahash';
    expectedHash: Uint8Array;
    start: OptionOrNullable<number>;
    length: OptionOrNullable<number>;
};
export declare function getAccountInfoAssertionSerializer(): Serializer<AccountInfoAssertionArgs, AccountInfoAssertion>;
export declare function accountInfoAssertion(kind: 'Lamports', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'Lamports'>): GetDataEnumKind<AccountInfoAssertionArgs, 'Lamports'>;
export declare function accountInfoAssertion(kind: 'DataLength', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'DataLength'>): GetDataEnumKind<AccountInfoAssertionArgs, 'DataLength'>;
export declare function accountInfoAssertion(kind: 'Owner', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'Owner'>): GetDataEnumKind<AccountInfoAssertionArgs, 'Owner'>;
export declare function accountInfoAssertion(kind: 'KnownOwner', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'KnownOwner'>): GetDataEnumKind<AccountInfoAssertionArgs, 'KnownOwner'>;
export declare function accountInfoAssertion(kind: 'RentEpoch', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'RentEpoch'>): GetDataEnumKind<AccountInfoAssertionArgs, 'RentEpoch'>;
export declare function accountInfoAssertion(kind: 'IsSigner', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'IsSigner'>): GetDataEnumKind<AccountInfoAssertionArgs, 'IsSigner'>;
export declare function accountInfoAssertion(kind: 'IsWritable', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'IsWritable'>): GetDataEnumKind<AccountInfoAssertionArgs, 'IsWritable'>;
export declare function accountInfoAssertion(kind: 'Executable', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'Executable'>): GetDataEnumKind<AccountInfoAssertionArgs, 'Executable'>;
export declare function accountInfoAssertion(kind: 'VerifyDatahash', data: GetDataEnumKindContent<AccountInfoAssertionArgs, 'VerifyDatahash'>): GetDataEnumKind<AccountInfoAssertionArgs, 'VerifyDatahash'>;
export declare function isAccountInfoAssertion<K extends AccountInfoAssertion['__kind']>(kind: K, value: AccountInfoAssertion): value is AccountInfoAssertion & {
    __kind: K;
};
//# sourceMappingURL=accountInfoAssertion.d.ts.map