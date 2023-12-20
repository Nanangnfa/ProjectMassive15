import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ToolbarBasicExample() {
    return (
        <div className="d-flex justify-content-center mt-4">
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group" style={{height: '50px'}} >
                <Button style={{backgroundColor: '#283849', border: 'none'}}>1</Button> <Button style={{backgroundColor: '#283849', border: 'none'}}>2</Button>{' '}
                <Button style={{backgroundColor: '#283849', border: 'none'}}>Lainnya</Button>
            </ButtonGroup>
        </ButtonToolbar>
    </div>
    );
}

export default ToolbarBasicExample;