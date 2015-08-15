import React from 'react';

export default class Navs extends React.Component {
  render() {
    return (
      <div className="bs-docs-section">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h2 id="navs">Navs</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h2 id="nav-tabs">Tabs</h2>
            <div className="bs-example">
              <ul className="nav nav-tabs" style={{marginBottom: 15}}>
                <li className><a href="#home" data-toggle="tab">Home</a></li>
                <li className="active"><a href="#profile" data-toggle="tab">Profile</a></li>
                <li className="disabled"><a>Disabled</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Dropdown <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                    <li className="divider" />
                    <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
                  </ul>
                </li>
              </ul>
              <div id="myTabContent" className="tab-content">
                <div className="tab-pane fade" id="home">
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </div>
                <div className="tab-pane fade active in" id="profile">
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                </div>
                <div className="tab-pane fade" id="dropdown1">
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                </div>
                <div className="tab-pane fade" id="dropdown2">
                  <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h2 id="nav-pills">Pills</h2>
            <div className="bs-example">
              <ul className="nav nav-pills">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li className="disabled"><a href="#">Disabled</a></li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Dropdown <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider" />
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
              <div className="bs-example">
                <ul className="nav nav-pills nav-stacked" style={{maxWidth: 300}}>
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#">Profile</a></li>
                  <li className="disabled"><a href="#">Disabled</a></li>
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                      Dropdown <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li className="divider" />
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h2 id="nav-breadcrumbs">Breadcrumbs</h2>
            <div className="bs-example">
              <ul className="breadcrumb">
                <li className="active">Home</li>
              </ul>
              <ul className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li className="active">Library</li>
              </ul>
              <ul className="breadcrumb" style={{marginBottom: 5}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li className="active">Data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h2 id="pagination">Pagination</h2>
            <div className="bs-example">
              <ul className="pagination">
                <li className="disabled"><a href="#">«</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
              </ul>
              <ul className="pagination pagination-lg">
                <li className="disabled"><a href="#">«</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">»</a></li>
              </ul>
              <ul className="pagination pagination-sm">
                <li className="disabled"><a href="#">«</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <h2 id="pager">Pager</h2>
            <div className="bs-example">
              <ul className="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </div>
            <div className="bs-example">
              <ul className="pager">
                <li className="previous disabled"><a href="#">← Older</a></li>
                <li className="next"><a href="#">Newer →</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">

          </div>
        </div>
      </div>

    );
  }
}
