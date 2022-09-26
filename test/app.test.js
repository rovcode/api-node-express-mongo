describe("[APP] Prueba general de la plataforma", ()=>{
    test("Esto debe retornar",()=>{
      const a = 4;
      const b = 4;
      const total = a+b;
      expect(total).toEqual(8);
    })
})