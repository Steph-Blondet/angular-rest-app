import { Optional } from "@angular/core";

// 5. Interface to pass data around
export interface Widget {
  id: number;
  // the question mark is to mark it as Optional and it will still satisfy the interface
  name?: string;
  description?: string;
}
