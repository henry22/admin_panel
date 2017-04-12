<template lang="html">
  <div class="category">
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <ul class="nav navbar-top-links navbar-left hidden-xs">
              <li>
                <form role="search" class="app-search hidden-xs">
                  <input type="text" placeholder="Search Category..." class="form-control" id="category-search">
                  <a href=""><i class="fa fa-search"></i></a>
                </form>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
            <div class="add-button pull-right m-r-40 m-t-10 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">
              <span class="plus-icon"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-xs-12 col-sm-6">
            <img class="img-responsive" src="../../static/plugins/images/chair.jpg" alt="user">
            <div class="white-box">
              <h4>Web design course</h4>
              <div class="text-muted m-b-20">
                <span class="m-r-10">
                  <i class="ti-alarm-clock"></i> 2 Year
                </span>
                <a class="text-muted m-l-10 m-r-10" href="#">
                  <i class="fa fa-heart-o"></i> 38
                </a>
                <span class="m-l-10">
                  <i class="fa fa-usd"></i> 50
                </span>
              </div>
              <p>
                <span>
                  <i class="ti-alarm-clock"></i> Duration: 6 Months
                </span>
              </p>
              <p>
                <span>
                  <i class="ti-user"></i> Professor: Jane Doe
                </span>
              </p>
              <p>
                <span>
                  <i class="fa fa-graduation-cap"></i> Students: 200+
                </span>
              </p>
              <!-- <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">More Details</button> -->
              <button class="btn btn-primary btn-rounded waves-effect waves-light m-t-10" data-target="#exampleModal" data-toggle="modal">
                <i class="ti-marker-alt"></i> Edit
              </button>
              <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10">
                <i class="ti-trash"></i> Delete
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="exampleModalLabel1">New category</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Title</label>
                          <input type="text" class="form-control" id="recipient-name1">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Description:</label>
                          <textarea class="form-control" id="message-text1"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Category</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-xs-12 col-sm-6">
            <img class="img-responsive" src="../../static/plugins/images/chair2.jpg" alt="user">
            <div class="white-box">
              <h4>Web design course</h4>
              <div class="text-muted m-b-20">
                <span class="m-r-10">
                  <i class="ti-alarm-clock"></i> 2 Year
                </span>
                <a class="text-muted m-l-10 m-r-10" href="#">
                  <i class="fa fa-heart-o"></i> 38
                </a>
                <span class="m-l-10">
                  <i class="fa fa-usd"></i> 50
                </span>
              </div>
              <p>
                <span>
                  <i class="ti-alarm-clock"></i> Duration: 6 Months
                </span>
              </p>
              <p>
                <span>
                  <i class="ti-user"></i> Professor: Jane Doe
                </span>
              </p>
              <p>
                <span>
                  <i class="fa fa-graduation-cap"></i> Students: 200+
                </span>
              </p>
              <button class="btn btn-primary btn-rounded waves-effect waves-light m-t-10" data-target="#exampleModal" data-toggle="modal">
                <i class="ti-marker-alt"></i> Edit
              </button>
              <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10">
                <i class="ti-trash"></i> Delete
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="exampleModalLabel1">New category</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Title</label>
                          <input type="text" class="form-control" id="recipient-name1">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Description:</label>
                          <textarea class="form-control" id="message-text1"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Category</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-xs-12 col-sm-6">
            <img class="img-responsive" src="../../static/plugins/images/chair3.jpg" alt="user">
            <div class="white-box">
              <h4>Web design course</h4>
              <div class="text-muted m-b-20">
                <span class="m-r-10">
                  <i class="ti-alarm-clock"></i> 2 Year
                </span>
                <a class="text-muted m-l-10 m-r-10" href="#">
                  <i class="fa fa-heart-o"></i> 38
                </a>
                <span class="m-l-10">
                  <i class="fa fa-usd"></i> 50
                </span>
              </div>
              <p>
                <span>
                  <i class="ti-alarm-clock"></i> Duration: 6 Months
                </span>
              </p>
              <p>
                <span>
                  <i class="ti-user"></i> Professor: Jane Doe
                </span>
              </p>
              <p>
                <span>
                  <i class="fa fa-graduation-cap"></i> Students: 200+
                </span>
              </p>
              <button class="btn btn-primary btn-rounded waves-effect waves-light m-t-10" data-target="#exampleModal" data-toggle="modal">
                <i class="ti-marker-alt"></i> Edit
              </button>
              <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10">
                <i class="ti-trash"></i> Delete
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="exampleModalLabel1">New category</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Title</label>
                          <input type="text" class="form-control" id="recipient-name1">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Description:</label>
                          <textarea class="form-control" id="message-text1"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Category</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-xs-12 col-sm-6">
            <img class="img-responsive" src="../../static/plugins/images/chair4.jpg" alt="user">
            <div class="white-box">
              <h4>Web design course</h4>
              <div class="text-muted m-b-20">
                <span class="m-r-10">
                  <i class="ti-alarm-clock"></i> 2 Year
                </span>
                <a class="text-muted m-l-10 m-r-10" href="#">
                  <i class="fa fa-heart-o"></i> 38
                </a>
                <span class="m-l-10">
                  <i class="fa fa-usd"></i> 50
                </span>
              </div>
              <p>
                <span>
                  <i class="ti-alarm-clock"></i> Duration: 6 Months
                </span>
              </p>
              <p>
                <span>
                  <i class="ti-user"></i> Professor: Jane Doe
                </span>
              </p>
              <p>
                <span>
                  <i class="fa fa-graduation-cap"></i> Students: 200+
                </span>
              </p>
              <button class="btn btn-primary btn-rounded waves-effect waves-light m-t-10" data-target="#exampleModal" data-toggle="modal">
                <i class="ti-marker-alt"></i> Edit
              </button>
              <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10">
                <i class="ti-trash"></i> Delete
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 class="modal-title" id="exampleModalLabel1">New category</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Title</label>
                          <input type="text" class="form-control" id="recipient-name1">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Description:</label>
                          <textarea class="form-control" id="message-text1"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save Category</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  #category-search {
    border: 1px solid #4c5667;
  }
  #editButton {
    background-color: #3498DB;
    border: none;
    color: #fff;
  }
  #editButton:hover {
    background-color: #2980B9;
  }

  .plus-icon {
    display: block;
    height: 2px;
    width: 16px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1px -8px;
  }
  .plus-icon:after {
    content: '';
    display: block;
    height: 16px;
    width: 2px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -8px -1px;
  }
  .add-button {
    display: block;
    width: 40px;
    height: 40px;
    background: #32ebc7;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: transform .2s ease-in-out, background .2s ease-in-out;
  }
  .add-button:hover {
    transform: scale(1.25);
  }
  .add-button:hover + .label {
    opacity: 1;
    visibilty: visible;
    transform: translateX(0);
  }
  .add-button:active {
    transform: scale(0.8);
  }
</style>
