/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */
import { Option, OptionOrNullable, PublicKey } from '@metaplex-foundation/umi';
import { GetDataEnumKind, GetDataEnumKindContent, Serializer } from '@metaplex-foundation/umi/serializers';
import { EquatableOperator, EquatableOperatorArgs, IntegerOperator, IntegerOperatorArgs } from '.';
export type UpgradeableProgramDataAssertion = {
    __kind: 'UpgradeAuthority';
    value: Option<PublicKey>;
    operator: EquatableOperator;
} | {
    __kind: 'Slot';
    value: bigint;
    operator: IntegerOperator;
};
export type UpgradeableProgramDataAssertionArgs = {
    __kind: 'UpgradeAuthority';
    value: OptionOrNullable<PublicKey>;
    operator: EquatableOperatorArgs;
} | {
    __kind: 'Slot';
    value: number | bigint;
    operator: IntegerOperatorArgs;
};
export declare function getUpgradeableProgramDataAssertionSerializer(): Serializer<UpgradeableProgramDataAssertionArgs, UpgradeableProgramDataAssertion>;
export declare function upgradeableProgramDataAssertion(kind: 'UpgradeAuthority', data: GetDataEnumKindContent<UpgradeableProgramDataAssertionArgs, 'UpgradeAuthority'>): GetDataEnumKind<UpgradeableProgramDataAssertionArgs, 'UpgradeAuthority'>;
export declare function upgradeableProgramDataAssertion(kind: 'Slot', data: GetDataEnumKindContent<UpgradeableProgramDataAssertionArgs, 'Slot'>): GetDataEnumKind<UpgradeableProgramDataAssertionArgs, 'Slot'>;
export declare function isUpgradeableProgramDataAssertion<K extends UpgradeableProgramDataAssertion['__kind']>(kind: K, value: UpgradeableProgramDataAssertion): value is UpgradeableProgramDataAssertion & {
    __kind: K;
};
//# sourceMappingURL=upgradeableProgramDataAssertion.d.ts.map