import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render correctly', () => {
    // const { container } = render(<Main />)
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
