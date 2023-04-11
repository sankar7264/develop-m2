import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { COLOR_THEME, GRAPHIC_PATTERN } from 'src/common/constants'
import { rem } from 'src/common/utils/css'
import theme, { SECONDARY_COLOR } from 'src/styles/theme'
import { makeStyles } from 'tss-react/mui'

const LevelType = {
  LEVEL1: 'page_level_1',
  LEVEL2: 'page_level_2',
  LEVEL3: 'page_level_3',
}

const useStyles = makeStyles()((defaultTheme, props) => {
  const { page_level, background_color, image, graphic_pattern, breadcrumbs } =
    props

  let height
  let backgroundImage
  let backgroundColor
  let colorHeading
  let colorSubHeading

  if (page_level === LevelType.LEVEL3) {
    height = rem(277)
  } else if (page_level === LevelType.LEVEL2) {
    height = rem(377)
  } else {
    height = rem(576)
  }

  if (image) {
    backgroundImage = `url(${image.url})`
  } else {
    backgroundImage = 'none'

    if (background_color === COLOR_THEME.CRISSY_FIELD) {
      backgroundColor = SECONDARY_COLOR.LIGHT['40']
      colorHeading = theme.palette.primary.dark
      colorSubHeading = theme.palette.presidio.color.DARK_GRAY

      if (graphic_pattern) {
        if (graphic_pattern === GRAPHIC_PATTERN.BEACH_STRAWBERRY) {
          backgroundImage =
            'url(/assets/patterns/beach-strawberry/CrissyField_FullWidth.webp)'
        } else if (graphic_pattern === GRAPHIC_PATTERN.MANZANITA) {
          backgroundImage =
            'url(/assets/patterns/manzanita/CrissyField_FullWidth.webp)'
        } else {
          backgroundImage =
            'url(/assets/patterns/pelican-footprints/CrissyField_FullWidth.webp)'
        }
      }
    } else {
      backgroundColor = theme.palette.primary.dark
      colorHeading = theme.palette.presidio.color.NEAR_WHITE
      colorSubHeading = theme.palette.presidio.color.NEAR_WHITE

      if (graphic_pattern) {
        if (graphic_pattern === GRAPHIC_PATTERN.BEACH_STRAWBERRY) {
          backgroundImage =
            'url(/assets/patterns/beach-strawberry/CypressGreen_FullWidth.webp)'
        } else if (graphic_pattern === GRAPHIC_PATTERN.MANZANITA) {
          backgroundImage =
            'url(/assets/patterns/manzanita/CypressGreen_FullWidth.webp)'
        } else {
          backgroundImage =
            'url(/assets/patterns/pelican-footprints/CypressGreen_FullWidth.webp)'
        }
      }
    }
  }

  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: breadcrumbs ? 'space-between' : 'flex-end',
      alignItems: 'flex-start',
      height: height,
      [theme.breakpoints.down('md')]: {
        height: 'auto',
        minHeight: height,
      },
      backgroundColor: backgroundColor,
      backgroundImage: backgroundImage,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    breadcrumbs: {
      padding: `${rem(40)} ${rem(40)} 0 ${rem(40)}`,
      [theme.breakpoints.up('xl')]: {
        padding: `${rem(64)} ${rem(156)} 0 ${rem(156)}`,
      },
    },
    heroTypeBlock: {
      padding: `${rem(40)} ${rem(24)}`,
      [theme.breakpoints.up('lg')]: {
        padding: rem(40),
      },
      [theme.breakpoints.up('xl')]: {
        padding: `${rem(40)} ${rem(156)}`,
      },
      color:
        backgroundColor === COLOR_THEME.CRISSY_FIELD
          ? theme.palette.secondary.dark
          : theme.palette.presidio.color.NEAR_WHITE,
    },
    heading: {
      ...theme.typography.h1,
      marginBottom: rem(16),
      [theme.breakpoints.down('lg')]: {
        fontSize: rem(56),
      },
      color: colorHeading,
    },
    subHeading: {
      ...theme.typography.body.default,
      fontSize: rem(18),
      color: colorSubHeading,
    },
  }
})

export default function Hero(props) {
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
    breadcrumbs,
  } = hero
  if (!heading && !sub_heading) return null

  const { classes } = useStyles({
    page_level,
    background_color,
    image,
    graphic_pattern,
    breadcrumbs,
  })

  return (
    <div className={`${classes.container} module`}>
      {breadcrumbs && <div className={classes.breadcrumbs}>BREADCRUMBS</div>}

      <div className={classes.heroTypeBlock}>
        <Typography variant="h1" className={classes.heading}>
          {heading}
        </Typography>
        <Typography className={classes.subHeading}>{sub_heading}</Typography>
      </div>
    </div>
  )
}

Hero.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.shape({
      page_level: PropTypes.oneOf([
        LevelType.LEVEL1,
        LevelType.LEVEL2,
        LevelType.LEVEL3,
      ]),
      heading: PropTypes.string,
      sub_heading: PropTypes.string,
      graphic_pattern: PropTypes.oneOf([
        false,
        GRAPHIC_PATTERN.BEACH_STRAWBERRY,
        GRAPHIC_PATTERN.MANZANITA,
        GRAPHIC_PATTERN.PELICAN,
      ]),
      background_color: PropTypes.oneOf([
        false,
        COLOR_THEME.CRISSY_FIELD,
        COLOR_THEME.CYPRESS_GREEN,
      ]),
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
    }).isRequired,
  }).isRequired,
}
