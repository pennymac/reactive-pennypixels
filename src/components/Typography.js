import React from 'react';
var TypographyPage;

export default TypographyPage = React.createClass({
  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="type">Typography</h2>
            </div>
          </div>
        </div>
        {/* Headings */}
        <div className="row">
          <div className="col-lg-4">
            <div className="bs-example bs-example-type">
              { [1,2,3,4,5,6].map((n) =>
                React.createElement('h' + n, null, 'Heading ' + n ))}
            </div>
            <div className="bs-example">
              <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bs-example">
              <h2>Example body text</h2>
              <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
              <p><small>This line of text is meant to be treated as fine print.</small></p>
              <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
              <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
              <p>An abbreviation of the word attribute is <abbr title data-original-title="attribute">attr</abbr>.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Emphasis classes</h2>
            <div className="bs-example">
              <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
              <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
              <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
              <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
          </div>
        </div>
        {/* Blockquotes */}
        <div className="row">
          <div className="col-lg-12">
            <h2 id="type-blockquotes">Blockquotes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
            </blockquote>
          </div>
          <div className="col-lg-6">
            <blockquote className="pull-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
});
