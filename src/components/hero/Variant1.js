import { Box, Typography } from '@mui/material'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'
import PropTypes from 'prop-types'
import Image from 'next/image'

const colorType = {
  CYPRESS_GREEN: 'cypress_green',
  CRISSY_FIELD: 'crissy_field',
}

const levelType = {
  LEVEL1: 'page_level_1',
  LEVEL2: 'page_level_2',
  LEVEL3: 'page_level_3',
}

const graphicPatternType = {
  BEACH_STRAWBERRY: 'beach_strawberry',
  MANZANITA: 'manzanita',
  PELICAN_TRACKS: 'pelican_tracks',
}

const useStyles = makeStyles()((defaultTheme, props) => {
  const { page_level, background_color, image, graphic_pattern } = props

  let height
  let backgroundImage
  let backgroundColor

  if (page_level === levelType.LEVEL3) {
    height = '277px'
  } else if (page_level === levelType.LEVEL2) {
    height = '377px'
  } else {
    height = '576px'
  }

  if (image) {
    backgroundImage = `url(${image})`
  } else if (graphic_pattern) {
    backgroundImage =
      graphic_pattern === graphicPatternType.BEACH_STRAWBERRY
        ? `url(${image})`
        : `url(${image}`
  } else {
    backgroundImage = 'none'
  }

  if (!image) {
    backgroundColor =
      background_color === colorType.CRISSY_FIELD
        ? SECONDARY_COLOR.LIGHT[40]
        : theme.palette.secondary.dark
  } else {
    backgroundColor = 'none'
  }

  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      minHeight: height,
      backgroundColor: backgroundColor,
      backgroundImage: backgroundImage,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
    },
    heroTypeBlock: {
      padding: '40px 24px',
      [theme.breakpoints.up('md')]: {
        padding: '40px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '40px 157px',
      },
      color:
        backgroundColor === colorType.CRISSY_FIELD
          ? theme.palette.secondary.dark
          : theme.palette.presidio.color.NEAR_WHITE,
    },
    heading: {
      ...theme.typography.h1,
      marginBottom: '16px',
      [theme.breakpoints.down('md')]: {
        fontSize: '56px',
      },
    },
    subHeading: {
      ...theme.typography.body.default,
      fontSize: '18px',
    },
  }
})

export default function WithImage(props) {
  const { data } = props
  if (!data) return null

  const { hero } = data
  if (!hero) return null

  const {
    page_level,
    heading,
    sub_heading,
    background_color,
    graphic_pattern,
    image,
  } = hero

  const { classes } = useStyles({
    page_level,
    background_color,
    image,
    graphic_pattern,
  })

  return (
    <div className={classes.container}>
      <div>dd</div>
      <div className={classes.heroTypeBlock}>
        <Typography variant="h1" className={classes.heading}>
          {heading}
        </Typography>
        <Typography className={classes.subHeading}>{sub_heading}</Typography>
      </div>
    </div>
  )
}

WithImage.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({}).isRequired,
  }).isRequired,
}
