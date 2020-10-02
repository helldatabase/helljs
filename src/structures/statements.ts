import { BaseType } from "./types";
import { GET, PUT, DEL } from "./tokens";
import { KeyValueBuilder } from "./builders";
import { InvalidArgumentError } from "../errors";

/**
 * A generic Statement class modelled after HellDB's statement interface.
 */
abstract class Statement {
  public abstract get token(): string;
  public abstract toString(): string;
}

export class GetStatement extends Statement {
  keys_str: string;

  constructor(...keys: string[]) {
    super();
    if (keys.length === 0) throw InvalidArgumentError;
    this.keys_str = KeyValueBuilder.keys_string(...keys);
  }

  public get token(): string {
    return GET;
  }

  public toString(): string {
    return `${this.token} ${this.keys_str};`;
  }
}

export class DelStatement extends Statement {
  keys_str: string;

  constructor(...keys: string[]) {
    super();
    if (keys.length === 0) throw InvalidArgumentError;
    this.keys_str = KeyValueBuilder.keys_string(...keys);
  }

  public get token(): string {
    return DEL;
  }

  public toString(): string {
    return `${this.token} ${this.keys_str};`;
  }
}

export class PutStatement extends Statement {
  value_string: string;

  constructor(private key: string, value: BaseType) {
    super();
    this.value_string = KeyValueBuilder.value_string(value);
  }

  public get token(): string {
    return PUT;
  }

  public toString(): string {
    return `${this.token} ${this.value_string};`;
  }
}
