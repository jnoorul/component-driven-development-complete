import { render, screen, within } from '@testing-library/react';
import { cdd } from '../../data/events';
import { Attendees } from './Attendees';

describe('Attendees', () => {
    it('should show heading as Attendees', () => {
        render(<Attendees members={cdd.attendees} />);
        expect(
            screen.getByRole('heading', { name: 'Attendees' })
        ).toBeInTheDocument();
    });
    it('should show 4 attendees', () => {
        render(<Attendees members={cdd.attendees} />);
        const memberList = screen.getAllByRole('listitem');
        expect(memberList.length).toBe(4);
    });
    it('should show attendees name', () => {
        render(<Attendees members={cdd.attendees} />);
        const memberList = screen.getAllByRole('listitem');
        memberList.forEach((item, index) => {
            const { getByText } = within(item);
            expect(getByText(cdd.attendees[index].name)).toBeInTheDocument();
        });
    });
});
