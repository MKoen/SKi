import React from 'react';
import ImageUpload from './ImageUpload';
import ImageCheckList from './ImageCheckList';
import ImagePreviews from './ImagePreviews';
import TagForm from './TagForm';
import TagList from './TagList';

var WebApp = React.createClass( {
    getInitialState: function () {
        return {
            images: [],
            tags  : []
        }
    },

    update: function ( images ) {
        this.setState( { images: images } );
    },

    addImage: function ( image ) {
        if ( this.state.images.indexOf( image ) < 0 ) {
            this.state.images.push( image );
        }
        this.setState( { images: this.state.images } );
    },

    addTag: function ( tag ) {
        if ( this.state.tags.indexOf( tag ) < 0 ) {
            this.state.tags.push( tag );
        }
        this.setState( { tags: this.state.tags } );
    },

    render: function () {
        return (
            <div>
                <ImageCheckList images={this.state.images} update={this.update}/>
                <ImageUpload add={this.addImage}/>
                <TagForm add={this.addTag}/>
                <TagList tags={this.state.tags}/>
                <ImagePreviews images={this.state.images} update={this.update}/>
            </div>
        )
    }
} );

export default WebApp;
