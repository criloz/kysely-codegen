/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */
import type { ColumnType, JSONColumnType } from "kysely";
import type { IPostgresInterval } from "postgres-interval";
export declare enum Status {
    CONFIRMED = "CONFIRMED",
    UNCONFIRMED = "UNCONFIRMED"
}
export declare enum TestStatus {
    ABC_DEF = "ABC_DEF",
    GHI_JKL = "GHI_JKL"
}
export type ArrayType<T> = ArrayTypeImpl<T> extends (infer U)[] ? U[] : ArrayTypeImpl<T>;
export type ArrayTypeImpl<T> = T extends ColumnType<infer S, infer I, infer U> ? ColumnType<S[], I[], U[]> : T[];
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U> ? ColumnType<S, I | undefined, U> : ColumnType<T, T | undefined, T>;
export type Interval = ColumnType<IPostgresInterval, IPostgresInterval | number | string, IPostgresInterval | number | string>;
export type Json = JsonValue;
export type JsonArray = JsonValue[];
export type JsonObject = {
    [x: string]: JsonValue | undefined;
};
export type JsonPrimitive = boolean | number | string | null;
export type JsonValue = JsonArray | JsonObject | JsonPrimitive;
export type Numeric = ColumnType<number | string>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export interface FooBar {
    array: string[] | null;
    childDomain: number | null;
    date: string | null;
    defaultedNullablePosInt: Generated<number | null>;
    defaultedRequiredPosInt: Generated<number>;
    /**
     * This is a comment on a column.
     *
     * It's nice, isn't it?
     */
    false: boolean;
    id: Generated<number>;
    interval1: Interval | null;
    interval2: Interval | null;
    json: Json | null;
    jsonTyped: JSONColumnType<{
        foo: "bar";
    }>;
    nullablePosInt: number | null;
    numeric1: Numeric | null;
    numeric2: Numeric | null;
    overridden: "OVERRIDDEN";
    testDomainIsBool: boolean | null;
    timestamps: ArrayType<Timestamp> | null;
    true: boolean;
    userStatus: Status | null;
    userStatus2: TestStatus | null;
}
export interface PartitionedTable {
    id: Generated<number>;
}
export interface DB {
    fooBar: FooBar;
    partitionedTable: PartitionedTable;
}
