import React from 'react'
import PropTypes from 'prop-types'
import {
  getConstituencyTurnouts,
  getDistrictTurnouts,
  withLanguage,
} from 'utils/helper'
import VoteTurnout from 'components/molecules/VoteTurnout'
import withQuery from 'withQuery'
import _ from 'lodash'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'

const VoteTurnouts = props => {
  const { turnouts } = props
  const { t } = useTranslation()

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t('turnout_chart.turnout_rate_title')}
      </Typography>
      <Grid container spacing={3}>
        {turnouts &&
          turnouts.length > 0 &&
          turnouts.map((turnout, index) => {
            const key =
              turnout.type === 'district'
                ? turnout.dc_code
                : turnout.type === 'constituency'
                ? turnout.code
                : 'all'
            const label =
              turnout.type === 'district'
                ? t('turnout_chart.district_turnout_rate', {
                    district: withLanguage(
                      turnout.dc_name_en,
                      turnout.dc_name_zh
                    ),
                  })
                : turnout.type === 'constituency'
                ? `${withLanguage(turnout.name_en, turnout.name_zh)} (${
                    turnout.code
                  })`
                : t('turnout_chart.HK_turnout_rate')
            return (
              <VoteTurnout
                key={key}
                label={label}
                current={turnout.current}
                percentage={turnout.percentage}
                updateTime={turnout.updateTime}
                type={turnout.type}
              />
            )
          })}
      </Grid>
    </>
  )
}

VoteTurnouts.propTypes = {
  turnouts: PropTypes.array,
}

export default withQuery(
  VoteTurnouts,
  {
    query: `
      constituencies: dcd_constituencies(where: { year: { _eq: $year } } ) {
        code
        name_zh
        name_en
        district {
          dc_code
          dc_name_en
          dc_name_zh

        }
        vote_stats {
          count
          type
          subtype
          category_1
          category_2
        }
      }
    `,
    variables: { year: 2019 },
  },
  data => {
    const constituencies = _.get(data, 'constituencies', [])
    const turnouts = _.get(data, 'turnouts', {})
    const districtCode = _.get(data, 'districtCode', null)
    return {
      turnouts:
        data.type === 'district'
          ? getDistrictTurnouts(constituencies, turnouts)
          : getConstituencyTurnouts(constituencies, turnouts, districtCode),
      districtCode: districtCode,
      type: data.type,
    }
  }
)
