import { useReactTable } from "@tanstack/react-table"

import data from '../MOCK_DATA.json'

function SimpleTable() {
// { nro, address, grupo, user, pcname, dependency, opersystem, observ, type, other } 
  const columns = [
    { header: "Nro", accesorKey: "nro" },
    { header: "DIr IP", accesorKey: "address" },
    { header: "Grupo", accesorKey: "group" },
    { header: "User", accesorKey: "user" },
    { header: "Nom. PC", accesorKey: "pcname" },
    { header: "Dependencia", accesorKey: "dependency" },
    { header: "Sis.Operativo", accesorKey: "opersystem" },
    { header: "Observaciones", accesorKey: "observ" },
    { header: "Tipo", accesorKey: "type" },
    { header: "Otro", accesorKey: "other" },
  ]
  const table = useReactTable({data, columns});

  return (
    <div>
      <table>
        <thead> {table.getHeaderGroups().map(headerGroup => {
            <tr key= { headerGroup.nro }>
              {headerGroup.headers.map(header => (
                <th key={ header.nro }>
                  { header.column.columnDef.header }
                </th>
              )) }
            </tr>
          })  }
        </thead>
      </table>
    </div>
  )
  
}

export default  SimpleTable