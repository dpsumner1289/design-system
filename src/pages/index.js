import React from "react"
import styled, { ThemeProvider } from "styled-components"
import preset from "../theme"
import Table from "../components/table"
import faker from "faker"

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  align-items: center;
  height: 100vh;
`
const columns = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
const data = [
  [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
]
const overrides = {
  Root: {
    style: {
      width: 0.5,
    },
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
const IndexPage = () => (
  <ThemeProvider theme={preset}>
    <Container>
      <Table columns={columns} data={data} overrides={overrides} />
    </Container>
  </ThemeProvider>
)
export default IndexPage
