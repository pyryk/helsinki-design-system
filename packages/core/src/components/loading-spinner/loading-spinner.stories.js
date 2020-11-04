import './loading-spinner.css';

export default {
  title: 'Components/Loading spinner',
};

export const Default = () => `
  <div class="hds-loading-spinner" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

export const Small = () => `
  <div class="hds-loading-spinner hds-loading-spinner--small" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

export const Multicolor = () => `
  <div class="hds-loading-spinner hds-loading-spinner--multicolor" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

export const CustomTheme = () => `
  <style>
    .hds-loading-spinner.custom-single-color {
      --spinner-color: var(--color-suomenlinna);
    }
  </style>
  <div class="hds-loading-spinner custom-single-color" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <br />

  <style>
    .hds-loading-spinner.custom-multi-color {
      --spinner-color-stage1: var(--color-engel);
      --spinner-color-stage2: var(--color-summer);
      --spinner-color-stage3: var(--color-metro);
    }
  </style>
  <div class="hds-loading-spinner hds-loading-spinner--multicolor custom-multi-color" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;
CustomTheme.storyName = 'Custom theme';
