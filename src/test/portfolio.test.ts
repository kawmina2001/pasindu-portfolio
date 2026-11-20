import { describe, expect, it } from "vitest";
import { agencyWhatsappLink, whatsappLink } from "@/data/personal";
import { filterProjects, projects } from "@/data/projects";
import { buildAgencyWhatsAppUrl, buildMailto, contactSchema } from "@/components/portfolio/Contact";

describe("portfolio rules", () => {
  it("Hire Me opens personal WhatsApp on +94 77 282 0226", () => {
    expect(whatsappLink()).toMatch(/^https:\/\/wa\.me\/94772820226\?text=/);
  });

  it("DevLogic Labs consultation opens business WhatsApp on +94 72 327 0863", () => {
    expect(agencyWhatsappLink()).toMatch(/^https:\/\/wa\.me\/94723270863\?text=/);
  });

  it("contact form submissions build WhatsApp message directed to +94 72 327 0863", () => {
    const url = buildAgencyWhatsAppUrl({
      name: "Amal Silva",
      email: "amal@example.com",
      projectType: "Full-Stack Web Application",
      message: "Need a custom business system.",
    });
    expect(url.startsWith("https://wa.me/94723270863?text=")).toBe(true);
    expect(url).toContain("Amal%20Silva");
    expect(url).toContain("Full-Stack%20Web%20Application");
  });

  it("project buttons only exist for real links (none provided yet)", () => {
    expect(projects.filter((p) => p.liveUrl || p.githubUrl)).toHaveLength(0);
  });

  it("research filter shows only the snake identification project", () => {
    expect(filterProjects(projects, "research").map((p) => p.id)).toEqual(["snake-identification"]);
  });

  it("all projects filter returns exactly one curated flagship sample from each core category", () => {
    const all = filterProjects(projects, "all");
    expect(all.map((p) => p.id)).toEqual(["novastore", "agrigo", "eduflex-uiux", "snake-identification"]);
  });

  it("contact form rejects an invalid email", () => {
    const r = contactSchema.safeParse({ name: "Amal", email: "nope", projectType: "Other", message: "Hello there, a project" });
    expect(r.success).toBe(false);
  });

  it("contact form addresses the email to devlogilabs.mail@gmail.com", () => {
    const url = buildMailto({ name: "Amal", email: "a@b.com", projectType: "Other", message: "Hello there" });
    expect(url.startsWith("mailto:devlogilabs.mail@gmail.com?")).toBe(true);
  });
});
