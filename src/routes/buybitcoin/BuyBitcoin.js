import React from 'react';
import PropTypes, { element } from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BuyBitcoin.css';
import {Table,Button,Grid,Checkbox,ButtonGroup,Row,Tab,Col,Dropdown,MenuItem,Nav, NavItem, NavDropdown, input,ControlLabel,FormControl,HelpBlock,FormGroup,DropdownButton,ButtonToolbar} from 'react-bootstrap';
import {currencies} from 'country-data';

function FieldGroup({ id, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class BuyBitcoin extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props)
  {
    super(props)
    this.state={value:'USD'}
  }

  change = event =>{
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
              <Row className="clearfix">
                <Col sm={12}>
                  <Nav bsStyle="tabs">
                    <NavItem eventKey="first">
                      Quick Buy
                    </NavItem>
                    <NavItem eventKey="second">
                      Quick Sell
                    </NavItem>

                  </Nav>
                </Col>

                <Col sm={12}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                      <div class = {s.innerAmounLayout}>
                        <div class="input-group">
                          <FieldGroup
                              id="formControlsText"
                              type="text"
                              placeholder="Amount"
                          />

                        <div class="input-group-btn">
                          <DropdownButton id="dropdown-size-large" placeholder="USD" title={this.state.value} value={this.state.value} onClock={this.change.bind(this)}>
                          {
                            currencies.all.map(element =>{
                              return<MenuItem eventKey={element.code} value={element.code}>{element.code}</MenuItem>
                            })
                          }
                          </DropdownButton>

                          <DropdownButton title="France" id="dropdown-size-large">
                            <MenuItem eventKey="1">United Kingdom</MenuItem>
                            <MenuItem eventKey="2">United State</MenuItem>
                            <MenuItem eventKey="3">Russia Federation</MenuItem>
                          </DropdownButton>

                          <DropdownButton title="All online offers" id="dropdown-size-large">
                            <MenuItem eventKey="1">All offline offers</MenuItem>
                            <MenuItem eventKey="2">Investment</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                          </DropdownButton>
                          <Button bsStyle="danger">Search</Button>
                        </div>
                      </div>
                    </div>

                      <Grid className = {s.innerCheckboxGroup}>
                        <Checkbox >
                          SMS not required
                        </Checkbox>
                        <Checkbox >
                          ID not required
                        </Checkbox>
                      </Grid>

                      <div>
                        <h1>Buy bitcoins in France</h1>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Seller</th>
                              <th>Payment method</th>
                              <th>Price / BTC</th>
                              <th>Limits</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'red'}}>Table cell</td>
                              <td>Table cell</td>

                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'red'}}>Table cell</td>
                              <td>Table cell</td>

                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'red'}}>Table cell</td>
                              <td>Table cell</td>

                            </tr>
                          </tbody>
                        </Table>
                    </div>
                    <div>
                        <h1>Buy bitcoins with cash near Vannes, France</h1>
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Seller</th>
                              <th>Distance</th>
                              <th>Location</th>
                              <th>Price/BTC</th>
                              <th>Limits</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'blue'}}>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'blue'}}>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>

                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'blue'}}>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>

                            </tr>
                            <tr>
                              <td>1</td>
                              <td>Table cell</td>
                              <td >Table cell</td>
                              <td style = {{ color : 'blue'}}>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>

                            </tr>
                          </tbody>
                        </Table>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      Tab 2 content

                    </Tab.Pane>

                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(BuyBitcoin);
