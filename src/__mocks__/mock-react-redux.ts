import { ExplicitAny } from "@type/global";

export const mockSelector = jest.fn();

export const mockDispatch = jest.fn().mockImplementation((action: ExplicitAny) => null);

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: mockSelector,
    useDispatch: () => mockDispatch
}));
