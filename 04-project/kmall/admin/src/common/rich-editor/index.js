/*
* @Author: TomChen
* @Date:   2019-08-19 11:32:57
* @Last Modified by:   TomChen
* @Last Modified time: 2019-08-19 11:42:40
*/
import React, { Component } from 'react'

import Simditor from 'simditor'

import 'simditor/styles/simditor.css'

class RichEditor extends Component{
    constructor(props){
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
    }
    componentDidMount(){
         new Simditor({
          textarea:this.editor,
          toolbar:this.toolbar
        })
    }

    render(){
        return(
            <textarea ref={(editor)=>{this.editor=editor}} ></textarea>
        )
    }
}

export default RichEditor