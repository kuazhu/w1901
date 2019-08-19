/*
 * @Author: TomChen
 * @Date:   2019-08-19 11:32:57
 * @Last Modified by:   TomChen
 * @Last Modified time: 2019-08-19 15:25:41
 */
import React, { Component } from 'react'

import Simditor from 'simditor'

import $ from 'jquery'

import 'simditor/styles/simditor.css'

class RichEditor extends Component {
    constructor(props) {
        super(props)
        this.toolbar = [
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            'ol',
            'ul',
            'blockquote',
            'code',
            'table',
            'link',
            'image',
            'hr',
            'indent',
            'outdent',
            'alignment',
        ]
        $.ajaxSetup({
            xhrFields:{
                withCredentials:true
            }
        })

    }
    componentDidMount() {
        new Simditor({
            textarea: this.editor,
            toolbar: this.toolbar,
            upload:{
                url:this.props.url,
                fileKey:'upload'
            }
        })
    }

    render() {
        return (
            <textarea ref={(editor)=>{this.editor=editor}} ></textarea>
        )
    }
}

export default RichEditor