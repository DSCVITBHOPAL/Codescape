import React, { Component } from 'react';
import styled from 'styled-components';
import detectPassiveEvents from 'detect-passive-events';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import memoize from 'memoize-one';
import palette from 'assets/palette';

const sections = [
  {
    title: 'Landing',
    id: 'landing',
    sectionColor: '#333232',
  },
  {
    title: 'About',
    id: 'about',
    sectionColor: palette.yellow,
  },
  {
    title: 'Tracks',
    id: 'tracks',
    sectionColor: palette.green,
  },
  {
    title: 'Speakers',
    id: 'speakers',
    sectionColor: palette.white,
  },
  {
    title: 'Schedule',
    id: 'schedule',
    sectionColor: palette.red,
  },
  {
    title: 'FAQs',
    id: 'faq',
    sectionColor: palette.black,
  },
  {
    title: 'Sponsors',
    id: 'sponsors',
    sectionColor: palette.blue,
  },
  {
    title: 'Footer',
    id: 'footer',
    sectionColor: palette.black,
  },
];

const navHeightPx = 0;

class Navbar extends Component {
  state = { activeItemID: sections[0].id };

  componentDidMount() {
    window.addEventListener(
      'scroll',
      this.handleScroll,
      detectPassiveEvents.hasSupport ? { capture: false, passive: true } : false
    );
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  _updateRootBackground = () => {
    console.log(document.body.style.backgroundColor);
    const { activeItemID } = this.state;
    console.log(activeItemID);
    document.body.style.backgroundColor = sections.find(
      ({ id }) => id == activeItemID
    ).sectionColor;
  };

  getItemRefNodes = memoize((navItems) => {
    return navItems.map(({ id }) => {
      return [id, document.getElementById(id)];
    });
  });

  handleScroll = () => {
    for (const [id, itemRefNode] of [
      ...this.getItemRefNodes(sections),
    ].reverse()) {
      const { top } = itemRefNode.getBoundingClientRect();
      if (top < navHeightPx) {
        this.setState({ activeItemID: id }, this._updateRootBackground);
        break;
      }
    }
  };

  render() {
    return (
      <Container>
        <NavLink key={'about'} href={`#about`}>
          about
        </NavLink>
        <NavLink key={'tracks'} href={`#tracks`}>
          winners
        </NavLink>
        <NavLink key={'speakers'} href={`#speakers`}>
          speakers
        </NavLink>
        <NavLink key={'schedule'} href={`#schedule`}>
          schedule
        </NavLink>
        <NavLink key={'faq'} href={`#faq`}>
          rules
        </NavLink>
        <NavLink key={'sponsors'} href={`#sponsors`}>
          sponsors
        </NavLink>
      </Container>
    );
  }
}

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;

  @media (max-width: 650px) {
    display: none;
  }
  /* padding: 20px 0px; */
`;

const NavLink = styled(AnchorLink)`
  color: #f8f0e7;
  margin: 0px 20px;
  font-size: 18px;
  text-decoration: none;
  font-weight: 200;
  cursor: pointer;
`;
