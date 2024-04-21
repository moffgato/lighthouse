/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { GetDataEnumKind, GetDataEnumKindContent, Serializer } from '@metaplex-foundation/umi/serializers';
import { EquatableOperator, EquatableOperatorArgs, IntegerOperator, IntegerOperatorArgs } from '.';
export type AccountInfoDeltaAssertion = {
    __kind: 'Lamports';
    value: bigint;
    operator: IntegerOperator;
} | {
    __kind: 'DataLength';
    value: bigint;
    operator: IntegerOperator;
} | {
    __kind: 'Owner';
    operator: EquatableOperator;
} | {
    __kind: 'RentEpoch';
    value: bigint;
    operator: IntegerOperator;
};
export type AccountInfoDeltaAssertionArgs = {
    __kind: 'Lamports';
    value: number | bigint;
    operator: IntegerOperatorArgs;
} | {
    __kind: 'DataLength';
    value: number | bigint;
    operator: IntegerOperatorArgs;
} | {
    __kind: 'Owner';
    operator: EquatableOperatorArgs;
} | {
    __kind: 'RentEpoch';
    value: number | bigint;
    operator: IntegerOperatorArgs;
};
export declare function getAccountInfoDeltaAssertionSerializer(): Serializer<AccountInfoDeltaAssertionArgs, AccountInfoDeltaAssertion>;
export declare function accountInfoDeltaAssertion(kind: 'Lamports', data: GetDataEnumKindContent<AccountInfoDeltaAssertionArgs, 'Lamports'>): GetDataEnumKind<AccountInfoDeltaAssertionArgs, 'Lamports'>;
export declare function accountInfoDeltaAssertion(kind: 'DataLength', data: GetDataEnumKindContent<AccountInfoDeltaAssertionArgs, 'DataLength'>): GetDataEnumKind<AccountInfoDeltaAssertionArgs, 'DataLength'>;
export declare function accountInfoDeltaAssertion(kind: 'Owner', data: GetDataEnumKindContent<AccountInfoDeltaAssertionArgs, 'Owner'>): GetDataEnumKind<AccountInfoDeltaAssertionArgs, 'Owner'>;
export declare function accountInfoDeltaAssertion(kind: 'RentEpoch', data: GetDataEnumKindContent<AccountInfoDeltaAssertionArgs, 'RentEpoch'>): GetDataEnumKind<AccountInfoDeltaAssertionArgs, 'RentEpoch'>;
export declare function isAccountInfoDeltaAssertion<K extends AccountInfoDeltaAssertion['__kind']>(kind: K, value: AccountInfoDeltaAssertion): value is AccountInfoDeltaAssertion & {
    __kind: K;
};
//# sourceMappingURL=accountInfoDeltaAssertion.d.ts.map