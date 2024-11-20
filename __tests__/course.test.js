import { render, screen } from '@testing-library/react';
import Course from '../pages/course/page.js';

test('renders CoursePage', () => {
  render(<Course />);
  const title = screen.getByText(/mastering cryptic crosswords/i);
  const subtitle = screen.getByText(/a course for cruciverbalists/i)
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});