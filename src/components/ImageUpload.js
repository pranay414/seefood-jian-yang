import React, { Component } from 'react';
import { Label, Button } from 'semantic-ui-react';

export default class ImageUpload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            file: '',
            imagePreviewUrl: '',
            buttonStatus: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFileChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                buttonStatus: false
            });
        }

        reader.readAsDataURL(file);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.file) {
            console.log('handle submit');
        }
        else {

        }
    }

    render() {

        let { imagePreviewUrl } = this.state;
        let imagePreview = null;

        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} />);
        }
        else {
            imagePreview = (<div className="previewText">Please select an image for preview</div>);
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Label
                        as="label"
                        basic
                        htmlFor="upload"
                    >
                        <Button
                            icon="upload"
                            label={{
                                basic: true,
                                content: 'Choose file'
                            }}
                            labelPosition="right"
                        />
                        <input
                            hidden
                            id="upload"
                            type="file"
                            onChange={this.handleFileChange}
                        />
                    </Label>
                    <Button disabled={this.state.buttonStatus} onClick={this.handleSubmit} style={{ marginLeft: '1.5em' }}>Check</Button>
                </form>
                <div className="imagePreview">
                    {imagePreview}
                </div>
            </div>
        );
    }
}