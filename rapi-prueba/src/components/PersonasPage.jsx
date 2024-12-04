import React from 'react';
//import { CreditCard, Wallet, PiggyBank, User, Home, Calculator, Shield } from 'lucide-react';

const PersonasPage = () => {
  const productosDestacados = [
    {
      titulo: "Préstamos Personales",
      descripcion: "Financiamiento flexible para tus proyectos personales con tasas desde 12.9% anual y aprobación en 24 horas",
      montos: "Desde S/. 1,000 hasta S/. 50,000",
      requisitos: ["DNI vigente", "6 meses de antigüedad laboral", "Ingresos desde S/. 1,200"],
      icono: <Wallet className="w-12 h-12 text-[#0D9488]" />
    },
    {
      titulo: "Tarjetas de Crédito",
      descripcion: "Tarjetas diseñadas para cada estilo de vida con beneficios exclusivos y control total desde nuestra app",
      beneficios: ["0% membresía el primer año", "Programa de puntos", "Descuentos especiales"],
      requisitos: ["Ingresos desde S/. 1,500", "Buen historial crediticio"],
      icono: <CreditCard className="w-12 h-12 text-[#0D9488]" />
    },
    {
      titulo: "Ahorro Programado",
      descripcion: "Cumple tus metas de ahorro con nuestros planes personalizados y las mejores tasas del mercado",
      beneficios: ["Tasa preferencial 6% anual", "Sin costo de mantenimiento", "Retiros flexibles"],
      montos: "Desde S/. 100 mensuales",
      icono: <PiggyBank className="w-12 h-12 text-[#0D9488]" />
    },
    {
      titulo: "Crédito Hipotecario",
      descripcion: "Financiamiento para la compra de tu vivienda con las mejores condiciones del mercado",
      caracteristicas: ["Hasta 90% del valor", "Plazos hasta 25 años", "Tasas desde 6.5% anual"],
      requisitos: ["Cuota inicial desde 10%", "Ingresos demostrables"],
      icono: <Home className="w-12 h-12 text-[#0D9488]" />
    }
  ];

  const beneficios = [
    {
      titulo: "Tecnología Digital",
      descripcion: "Gestiona todos tus productos desde nuestra app móvil con total seguridad",
      icono: <User className="w-8 h-8 text-[#0D9488]" />
    },
    {
      titulo: "Asesoría Personalizada",
      descripcion: "Equipo de asesores financieros especializados para guiarte en cada decisión",
      icono: <Calculator className="w-8 h-8 text-[#0D9488]" />
    },
    {
      titulo: "Seguridad Garantizada",
      descripcion: "Tus operaciones protegidas con los más altos estándares de seguridad digital",
      icono: <Shield className="w-8 h-8 text-[#0D9488]" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="bg-[#0D9488] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Soluciones Financieras Personales</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            En Rapimoney entendemos tus necesidades y objetivos financieros. 
            Por eso, te ofrecemos productos diseñados específicamente para ayudarte 
            a alcanzar tus metas, con la flexibilidad y seguridad que necesitas.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-[#0D9488] mb-12 text-center">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productosDestacados.map((producto, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {producto.icono}
                  <h3 className="text-2xl text-[#0D9488] font-bold">{producto.titulo}</h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">{producto.descripcion}</p>
                {producto.montos && (
                  <p className="text-[#0D9488] font-semibold mb-2">
                    {producto.montos}
                  </p>
                )}
                {producto.beneficios && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Beneficios:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {producto.beneficios.map((beneficio, idx) => (
                        <li key={idx} className="text-gray-600">{beneficio}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {producto.requisitos && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Requisitos:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {producto.requisitos.map((requisito, idx) => (
                        <li key={idx} className="text-gray-600">{requisito}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {producto.caracteristicas && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Características:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {producto.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="text-gray-600">{caracteristica}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="mt-4 bg-[#0D9488] text-white px-6 py-2 rounded-lg hover:bg-[#0B7C7C] transition-colors">
                  Solicitar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-teal-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0D9488] mb-12 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  {beneficio.icono}
                  <h3 className="text-xl font-semibold text-[#0D9488]">
                    {beneficio.titulo}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-[#0D9488] to-[#0B7C7C] rounded-lg text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Déjanos ayudarte a alcanzar tus metas financieras. Nuestros asesores 
            están listos para brindarte la mejor orientación y encontrar el 
            producto perfecto para ti.
          </p>
          <button className="bg-white text-[#0D9488] px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
            Contactar un asesor
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonasPage;