import React, { Component } from 'React';
import PropTypes from 'prop-types';

//----------es6寫法 start----------
class ProptypePlugin_propTypes_defaultprops extends React.Component {
	constructor(props) {		
		super(props);
		this.state = {}
	}
	
	render() {
		return (
			<div>Hello {this.props.name}</div>
		)
	}
}
//----------es6寫法 end----------

//----------stateless component 寫法 start----------
// const ProptypePlugin_propTypes_defaultprops = (props) => (
// 	<div>Hello {props.name}</div>
// );
//----------stateless component 寫法 end----------


ProptypePlugin_propTypes_defaultprops.propTypes = {
  name: PropTypes.string
}


ProptypePlugin_propTypes_defaultprops.defaultProps = {
 name: 'Zuck'
}

export default ProptypePlugin_propTypes_defaultprops;