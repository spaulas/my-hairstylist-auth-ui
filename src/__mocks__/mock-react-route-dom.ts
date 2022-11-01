export const mockPush = jest.fn();
export const mockBlock = jest.fn();
export const mockLocation = jest.fn();

export const mockParams = jest.fn().mockImplementation(() => {});

jest.mock('react-router-dom', () => ({
    useLocation: mockLocation,
    useParams: mockParams,
    useHistory: () => ({
        push: mockPush,
        block: () => ({
            current: mockBlock
        })
    })
}));
