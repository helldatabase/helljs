import { BaseType } from "./types";

abstract class Builder {}

export class UrlBuilder extends Builder {
  public query_url: string;
  public status_url: string;
  public length_url: string;

  constructor(private base_url: string) {
    super();
    this.query_url = `${base_url}/query`;
    this.status_url = `${base_url}/status`;
    this.length_url = `${base_url}/length`;
  }
}

export class KeyValueBuilder extends Builder {
  static keys_string(...keys: string[]): string {
    return keys.join(" & ");
  }

  static value_string(value: BaseType): string {
    return JSON.stringify(value);
  }
}
