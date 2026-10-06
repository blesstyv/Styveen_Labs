import {
  CheckCircle2,
} from 'lucide-react'


function ProcesoArmado() {
  const steps = [
    {
      title: 'Revisión de componentes',
      description:
        'Se compran todos los componentes nuevos, se evalúa su estado y se verifica que sean compatibles entre sí.',
    },

    {
      title: 'Preparación del gabinete',
      description:
        'Se organiza el espacio de trabajo y se prepara el gabinete para instalar correctamente cada componente.',
    },

    {
      title: 'Instalación de componentes',
      description:
        'Se instalan procesador, memoria RAM, almacenamiento, placa madre, fuente de poder y demás componentes del equipo. Según especificación del equipo.',
    },

    {
      title: 'Organización del cableado',
      description:
        'Se ordenan las conexiones internas buscando mantener un montaje limpio y favorecer el flujo de aire.',
    },

    {
      title: 'Primer encendido',
      description:
        'Se realiza el primer arranque para comprobar que todos los componentes sean reconocidos correctamente.',
    },

    {
      title: 'Configuración inicial',
      description:
        'Se revisan los parámetros principales del sistema y se realizan los ajustes necesarios para el funcionamiento del equipo.',
    },

    {
      title: 'Instalación y actualización',
      description:
        'Se instalan los controladores necesarios y se actualizan los elementos principales del sistema.',
    },

    {
      title: 'Pruebas de funcionamiento y optimización',
      description:
        'Se comprueba el funcionamiento de memoria, almacenamiento, procesador y demás componentes instalados. Además de realizar un proceso de optimización del sistema para mejorar su rendimiento y estabilidad.',
    },

    {
      title: 'Control de temperaturas',
      description:
        'Se revisan las temperaturas del equipo durante su funcionamiento para detectar posibles problemas de refrigeración.',
    },

    {
      title: 'Validación final',
      description:
        'Se realiza una revisión general antes de considerar el computador listo para su entrega.',
    },
  ]


  return (
    <section className="info-page">

      <div className="container">

        <div className="info-header">

          <span className="eyebrow">
            STYVEEN LABS // PROCESO DE ARMADO
          </span>

          <h1>
            DEL COMPONENTE
            <span> AL PC LISTO.</span>
          </h1>

          <p>
            Cada computador pasa por un proceso de armado,
            configuración y revisión antes de considerarse
            listo para su entrega.
          </p>

        </div>


        <div className="lab-process">

          {steps.map(
            (step, index) => (

              <article
                key={step.title}
                className="lab-step"
              >

                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <CheckCircle2 size={19} />

                <div>

                  <strong>
                    {step.title}
                  </strong>

                  <p>
                    {step.description}
                  </p>

                </div>

              </article>

            ),
          )}

        </div>

      </div>

    </section>
  )
}


export default ProcesoArmado