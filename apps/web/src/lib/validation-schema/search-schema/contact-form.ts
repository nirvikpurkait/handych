import { services } from "@repo/data";
import z from "zod";

export const contactRouteSearchSchema = z.object({
  service: z
    .enum([...services.map((s) => s.title)])
    .catch("Housekeeping")
    .optional(),
});
