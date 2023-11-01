import { render, screen } from '@testing-library/react'
import Button from './index'

describe('<Button />', () => {
  it('should render correctly', () => {
    // const { container } = render(<Button />)
    render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
