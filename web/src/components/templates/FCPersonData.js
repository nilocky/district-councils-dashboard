//

import React, { useEffect, useState } from 'react'
import Rows from 'components/atoms/Rows'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import axios from 'axios'
import PersonEvent from 'components/molecules/PersonEvent'
import Typography from '@material-ui/core/Typography'
import { COLORS } from 'ui/theme'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  && {
    width: 100%;
    margin-top: 32px;
    padding: 0 16px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: unset;
      color: ${COLORS.main.primary};
    }
    a:hover {
      text-decoration: underline;
    }
  }
`

const StyledRows = styled(Rows)`
  && {
    align-items: normal;
  }
`

const StyledButton = styled(Button)`
  && {
    text-transform: lowercase;
    border: 1px black solid;
    height: 48px;
    padding: 0 32px;
  }
`

const FCPersonData = props => {
  const { fcUuid, name, filterFunc } = props
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://api.hkfactcheck.io/persons/${fcUuid}/events`
      )

      setEvents(result.data.filter(filterFunc).filter((_, i) => i < 5))
    }
    fetchData()
  }, [])
  const fcUri = `https://hkfactcheck.io/person/${fcUuid}/${name}`
  const { t } = useTranslation()

  return (
    <>
      <Container>
        {events.length > 0 ? (
          <Typography variant="body1">
            <span
              dangerouslySetInnerHTML={{
                __html: t('fcPersonData.report', { fc_url: fcUri }),
              }}
            />
          </Typography>
        ) : (
          <Typography variant="body1">
            <span
              dangerouslySetInnerHTML={{
                __html: t('fcPersonData.no_record', { fc_url: fcUri }),
              }}
            />
          </Typography>
        )}
      </Container>
      <StyledRows>
        {events.map(event => (
          <PersonEvent key={event.eventId} {...event}></PersonEvent>
        ))}
        {events.length > 0 && (
          <Container>
            <StyledButton
              onClick={() => {
                const win = window.open(fcUri, '_blank')
                win.focus()
              }}
            >
              {/* 更多資料及往績 */}
              {t('fcPersonData.go_to_fc', { name })}
            </StyledButton>
          </Container>
        )}
      </StyledRows>
    </>
  )
}

FCPersonData.propsType = {
  uuid: PropTypes.string,
  fcUuid: PropTypes.string,
  filterFunc: PropTypes.func.isRequired,
}

export default FCPersonData
