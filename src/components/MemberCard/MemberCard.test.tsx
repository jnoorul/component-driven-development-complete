import { render, screen } from '@testing-library/react';
import { cdd } from '../../data/events';
import { MemberCard } from './MemberCard';

describe('MemberCard', () => {
    it('should display member name, desc and role', () => {
        render(<MemberCard member={cdd.attendees[0]} />);
        expect(screen.getByText(cdd.attendees[0].name)).toBeInTheDocument();
        expect(screen.getByText(cdd.attendees[0].desc)).toBeInTheDocument();
        expect(screen.getByText(cdd.attendees[0].role)).toBeInTheDocument();
    });
});
