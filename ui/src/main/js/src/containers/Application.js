import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { instrumentDataRequested, peopleDataRequested, tradeDataRequested} from '../actions';
import { Layout, Content, Header, Grid, Cell, IconButton, Card, CardTitle, CardText, CardMenu } from 'react-mdl';

class Application extends Component {

	onSync = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(instrumentDataRequested())
        dispatch(peopleDataRequested())
        dispatch(tradeDataRequested())
    };

	renderCard = (element) => {
        return (
            <Cell key={element['@id']} col={2}>
                <Card shadow={0} style={{width: '100%'}}>
                    <CardTitle expand style={{color: '#FFF', background: '#3E4EB8'}}>{element['label']}</CardTitle>
                    <CardText>{element['comment']}</CardText>
                    <CardMenu style={{color: '#FFF'}}>
                        <IconButton name="launch"/>
                    </CardMenu>
                </Card>
            </Cell>
        );
    }

    render() {
    	const { instruments, people, trades } = this.props;

        return (
            <div>
	            <Layout fixedHeader>
		            <Header title="Semantic Web London March 2017"/>
                    <Content>
						<Grid>
							<Cell col={12}>
								<IconButton name="sync" onClick={this.onSync}/>
							</Cell>
						</Grid>
                        <Grid>
                            { _.map(instruments['@graph'], this.renderCard) }
                        </Grid>
                        <Grid>
                            { _.map(people['@graph'], this.renderCard) }
                        </Grid>
                        <Grid>
                            { _.map(trades['@graph'], this.renderCard) }
                        </Grid>
                    </Content>
            	</Layout>
            </div>
        );
    }
}

Application.propTypes = {
    instruments: PropTypes.object.isRequired,
	people: PropTypes.object.isRequired,
	trades: PropTypes.object.isRequired

}

const mapStateToProps = state => {
    const { instruments, people, trades } = state;
    return {
        instruments, people, trades
    };
}

export default connect(mapStateToProps)(Application)
