import React from "react"
import PropTypes from "prop-types"
import propTypes from "@styled-system/prop-types"
import { Table as Root, Th, Tr, Td } from "../elements/table"

const defaultOverrides = {
  Root: {
    style: {},
  },
  ThRow: {
    style: {},
  },
  Th: {
    style: {},
  },
  TdRow: {
    style: {},
  },
  Td: {
    style: {},
  },
}
const Table = ({ columns, data, overrides = defaultOverrides }) => {
  console.log(overrides.ThRow)
  const renderHeader = text => (
    <Th key={text} {...overrides.Th.style}>
      {text}
    </Th>
  )
  const renderCell = text => <Td {...overrides.Td.style}>{text}</Td>
  const renderRow = row => (
    <Tr key={row[0]} {...overrides.TdRow.style}>
      {row.map(renderCell)}
    </Tr>
  )
  return (
    <Root {...overrides.Root.style}>
      <thead>
        <Tr {...overrides.ThRow.style}>{columns.map(renderHeader)}</Tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </Root>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
  overrides: {
    Root: PropTypes.shape({
      style: {
        ...propTypes.border,
        ...propTypes.color,
        ...propTypes.layout,
        ...propTypes.space,
      },
    }),
    ThRow: PropTypes.shape({
      style: {
        ...propTypes.border,
        ...propTypes.color,
        ...propTypes.layout,
        ...propTypes.space,
      },
    }),
    Th: PropTypes.shape({
      style: {
        ...propTypes.border,
        ...propTypes.color,
        ...propTypes.layout,
        ...propTypes.space,
      },
    }),
    TdRow: PropTypes.shape({
      style: {
        ...propTypes.border,
        ...propTypes.color,
        ...propTypes.layout,
        ...propTypes.space,
      },
    }),
    Td: PropTypes.shape({
      style: {
        ...propTypes.border,
        ...propTypes.color,
        ...propTypes.layout,
        ...propTypes.space,
      },
    }),
  },
}

export default Table
