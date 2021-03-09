import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {

    // renderError({ error, touched }) { // meta { error: -, touched: - }
    //     if (touched && error) {
    //         return (
    //             <div className='ui error message'>
    //                 <div className='header'>{error}</div>
    //             </div>
    //         );
    //     }
    // }

    // renderInput = ({ input, label, meta }) => {
    //     console.log(meta);

    //     const className= `field ${meta.error && meta.touched ? 'error' : ''}`;

    //     return (
    //         // <input 
    //         //     onChange={formProps.input.onChange} 
    //         //     value={formProps.input.value} 
    //         // />
    //         <div className={className}>
    //             <label>{label}</label>
    //             <input {...input} autoComplete='off' />
    //             {this.renderError(meta)}
    //         </div>
    //     );
    // }

    onSubmit = (formValues) => {
        // event.preventDefault(); // redux take care of it
        console.log(formValues);

        this.props.createStream(formValues);

    }

    render() {
        console.log(this.props);
        return (
            // <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
            //     <Field name="title" component={this.renderInput} label="Enter Title" />
            //     <Field name="description" component={this.renderInput} label="Enter Description" />
            //     <button className='ui button primary'>Submit</button>
            // </form>
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

// const validate = (formValues) => {
//     const errors = {};

//     if (!formValues.title) {
//         errors.title = 'You must enter a title';
//     }

//     if (!formValues.description) {
//         errors.description = 'You must enter a description';
//     }

//     return errors;
// };

// const formWrapped = reduxForm({
//     form: 'streamCreate',
//     validate
// })(StreamCreate);

export default connect(null, { createStream })(StreamCreate);