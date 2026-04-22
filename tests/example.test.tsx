import { describe, it, expect } from "vitest";

describe("Testes aleatórios", () => {
  it("2 + 3 é igual a 5?", () => {
    const result = 2 + 3;
    expect(result).toBe(5);
  });

  it("string deve conter uma palavra", () => {
    const text = "CI/CD é muito útil";
    expect(text).toContain("útil");
  });

  it("array deve ter o tamanho correto", () => {
    const arr = [1, 2, 3, 4];
    expect(arr.length).toBe(4);
  });

  it("objeto deve ter uma propriedade", () => {
    const user = { name: "Luccas", age: 25 };
    expect(user).toHaveProperty("name");
  });

  it("boolean deve ser verdadeiro", () => {
    const isActive = true;
    expect(isActive).toBe(true);
  });
});
