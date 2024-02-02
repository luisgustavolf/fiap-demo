import { classesHandlers } from "./handlers/classes/handlers";
import { loginHandlers } from "./handlers/login/login";

export const handlers = [
  ...loginHandlers,
  ...classesHandlers
]