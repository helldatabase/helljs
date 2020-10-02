import axios from "axios";

import { BaseType } from "./structures/types";
import { UrlBuilder } from "./structures/builders";
import { GetStatement } from "./structures/statements";
import { ConnectionError, DatabaseError } from "./errors";

// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
export default class Store {
  private readonly url: string;
  private url_store: UrlBuilder;

  public async ok(): Promise<boolean> {
    return await axios
      .get(this.url_store.status_url)
      .then((ret) => ret.data === "ok")
      .catch((_) => false);
  }

  constructor(port: number = 8080, host: string = "127.0.0.1") {
    this.url = `http://${host}:${port}`;
    this.url_store = new UrlBuilder(this.url);

    this.ok().then((status) => {
      if (!status)
        throw new ConnectionError(
          `cannot connect to HellDB instance on ${this.url}`
        );
    });
  }

  public static extract(resp_text: string): BaseType[] {
    const response = JSON.parse(resp_text);
    if (Object.keys(response).length !== 0) {
      throw new DatabaseError(response.errors);
    } else {
      return response.results[0];
    }
  }

  public async get(...keys: string[]): Promise<BaseType[]> {
    const get_statement = new GetStatement(...keys);
    return axios
      .post(this.url_store.query_url, {})
      .then((res) => res)
      .catch((err) => err);
  }
}
