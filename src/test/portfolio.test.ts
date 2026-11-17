import { describe, expect, it } from "vitest";
import { whatsappLink } from "@/data/personal";
import { filterProjects, projects } from "@/data/projects";
import { buildMailto, contactSchema } from "@/components/portfolio/Contact";

describe("portfolio rules", () => {
  it("Hire Me opens WhatsApp on +94 77 282 0226", () => {
    expect(whatsappLink()).toMatch(/^https:\/\/wa\.me\/94772820226\?text=/);
  });

  it("project buttons only exist for real links (none provided yet)", () => {
    expect(projects.filter((p) => p.liveUrl || p.githubUrl)).toHaveLength(0);
  });

  it("research filter shows only the snake identification project", () => {
    expect(filterProjects(projects, "research").map((p) => p.id)).toEqual(["snake-identification"]);
  });

  it("contact form rejects an invalid email", () => {
    const r = contactSchema.safeParse({ name: "Amal", email: "nope", projectType: "Other", message: "Hello there, a project" });
    expect(r.success).toBe(false);
  });

  it("contact form addresses the email to pasindukawmina85@gmail.com", () => {
    const url = buildMailto({ name: "Amal", email: "a@b.com", projectType: "Other", message: "Hello there" });
    expect(url.startsWith("mailto:pasindukawmina85@gmail.com?")).toBe(true);
  });
});
