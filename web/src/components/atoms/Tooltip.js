import styled from 'styled-components'
import React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
const InfoIconSvg = styled(InfoIcon)`
  && {
    font-size: ${props => props.size || 16}px;
    vertical-align: bottom;
  }
`

const ErrorIconSvg = styled(ErrorIcon)`
  && {
    font-size: ${props => props.size || 16}px;
    vertical-align: bottom;
  }
`

export const HtmlTooltip = styled(props => (
  <Tooltip
    className={props.className}
    classes={{ popper: props.className, tooltip: 'tooltip' }}
    title={
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: props.text,
          }}
        />
      </>
    }
    {...props}
  >
    {props.type === 'error' ? (
      <ErrorIconSvg size={props.size || 16} />
    ) : (
      <InfoIconSvg size={props.size || 16} />
    )}
  </Tooltip>
))`
  & .tooltip {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  }
`
