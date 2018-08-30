import SpTransController from '../../../src/controllers/sptrans';
import sinon from 'sinon';

describe('Controllers: sptrans', () => {
    const defaultResp = [{
        "cp": 340015329,
        "np": "AFONSO BRAZ B/C1",
        "ed": "R ARMINDA/ R BALTHAZAR DA VEIGA",
        "py": -23.592938,
        "px": -46.672727
    },
    {
        "cp": 340015328,
        "np": "AFONSO BRAZ B/C2",
        "ed": "R ARMINDA/ R BALTHAZAR DA VEIGA",
        "py": -23.59337,
        "px": -46.672766
    }];

    describe('get() stops', () => {
        it('should return a list of stops', () => {
            const request = 'Balthazar da Veiga';
            const response = {
                send: sinon.spy()
            };
            const spTransController = new SpTransController();
            spTransController.getStop(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultResp)).to.be.true;
        });
    });
});